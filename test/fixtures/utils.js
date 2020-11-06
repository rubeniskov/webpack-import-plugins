const path = require('path');
const execa = require('execa');
const { promisify } = require('util');
const rimraf = promisify(require('rimraf'));
const semver = require('semver');
const fs = require('fs');
const os = require('os');
const cpy = require('cpy');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const mkdtemp = promisify(fs.mkdtemp);
const depTreeStruct = require('./dep-tree-struct.json');

const readPkg = (dir) => require(path.join(dir, "package.json"));

const compileWebpackAndEvalOutput = async (cwd, expression, opts) => {
  let {
    cleanup = true,
  } = { ...opts }
  const {
    output = 'output.json',
    config = 'config.js',
    logger,
    cli = 'webpack',
  } = { ...opts }
  // Files
  const fileDeletePattern = `${cwd}/{${[output, 'config.js', 'entry.js', 'dist'].join(',')}}`;

  await cpy(`${__dirname}/wp/entry.js`, cwd);

  // Config settlement
  const configContent = await readFile(`${__dirname}/wp/${config}`, { encoding: 'utf8' })

  const parsedConfig = configContent.replace(new RegExp('process.env.WEBPACK_TESTING_VALUE', 'g'), expression);
  await writeFile(`${cwd}/config.js`, parsedConfig, { encoding: 'utf8' });

  // Compilation
  const webpackArgs = [`./entry.js`, '-c', 'config.js', '-o', './dist' ];
  const webpackExecOpts = {
    cwd,
    localDir: cwd,
    preferLocal: true,
    env: {
      WEBPACK_TESTING_FILENAME: `${cwd}/${output}`,
      ...process.env

    }
  };

  try {
    const { stderr, stdout, exitCode } = await execa(cli, webpackArgs, webpackExecOpts);

    if (logger) {
      stdout && logger(`stdout: \n${stdout}`);
      stderr && logger(`stderr: \n${stderr}`);
      cleanup = false;
    }

    // webpack doesn't return exitCode != 0 when the config is errored
    if (stderr || exitCode !== 0) throw new Error(stderr);
  } catch (ex) {
    // Ignore deprecation errors
    if (!/DeprecationWarning/.test(ex.message)) {
      throw ex;
    }
  }


  const outputContent = await readFile(`${cwd}/${output}`, { encoding: 'utf8' })

  if (cleanup) {
    await rimraf(fileDeletePattern);
  }

  return JSON.parse(outputContent);
}

const getWebpackPluginsPathsByVersion = (v) => require(`${process.cwd()}/wp-plugins-v${v}.json`);

const runDepTree = (cb) => {
    depTreeStruct.forEach(cb);
}

const truncate = (str, n) => {
  return (str.length > n) ? str.substr(0, n-1) + '...' : str;
};

const getWebpackExpectedVersionFromPkg = (modulePath) => {
  const {
    peerDependencies = {},
    devDependencies = {},
    dependencies = {},
  } = readPkg(modulePath);

  return dependencies.webpack || peerDependencies.webpack || devDependencies.webpack
}

const createTemp = async (prefix = 'test-wip-') => {
  return await mkdtemp(path.join(os.tmpdir(), prefix));
}

module.exports = {
    getWebpackPluginsPathsByVersion,
    compileWebpackAndEvalOutput,
    getWebpackExpectedVersionFromPkg,
    runDepTree,
    semver,
    readPkg,
    truncate,
    createTemp,
    readFile,
    writeFile,
}
