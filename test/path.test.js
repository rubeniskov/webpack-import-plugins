const test = require('ava');
const path = require('path');
const execa = require('execa');
const {
  semver,
  readPkg,
  getWebpackExpectedVersionFromPkg,
  compileWebpackAndEvalOutput,
  runDepTree,
  createTemp,
  writeFile,
} = require('./fixtures/utils');

const getWepackPathFromContext = async (cwd, opts) => {
  const evalExpresion = 'require("webpack-import-plugins/lib/webpack-path")()';
  const result = await compileWebpackAndEvalOutput(cwd, evalExpresion, opts);
  return result;
}

runDepTree((module) => {
  const modulePath = `${__dirname}/fixtures/${module}`
  const expectedVersion = getWebpackExpectedVersionFromPkg(modulePath);

  test.serial(`should return version ${expectedVersion} of webpack for ${module}`, async (t) => {
    const webpackPath = await getWepackPathFromContext(modulePath);

    t.log(`webpackPath: ${webpackPath}`);
    t.is(typeof webpackPath, 'string');

    const { version: webpackVersion } = readPkg(webpackPath);
    t.log(`${webpackVersion} - ${expectedVersion}`);
    t.true(semver.satisfies(webpackVersion, expectedVersion));
  });
});

test.serial(`should get the root webpack module when not in dep-tree`, async (t) => {
  const modulePath = await createTemp();
  const cwd = process.cwd();
  await writeFile(path.join(modulePath, 'package.json'), JSON.stringify({name:'test'}), { encoding: 'utf8' });
  const evalExpresion = `require("${cwd}/lib/webpack-path")()`;
  const webpackPath = await compileWebpackAndEvalOutput(modulePath, evalExpresion, {
    cli: `${cwd}/node_modules/.bin/webpack`,
  });

  t.log(`tempDir: ${modulePath}`);
  t.is(webpackPath, `${cwd}/node_modules/webpack`);
});

// test.serial(`should return error when webpack doesn't exist`, async (t) => {
//   t.timeout(60000, 'make sure database has started');
//   const modulePath = await createTemp();
//   const cwd = process.cwd();
//   const { stdout: packedWip } = await execa('npm', ['pack'], { cwd });
//   await writeFile(path.join(modulePath, 'package.json'), JSON.stringify({
//     name:'test-missing',
//     devDependencies: {
//       "webpack": "^4",
//       "webpack-cli": "^4",
//       "webpack-import-plugins": `file:${cwd}/${packedWip}`,
//     }
//   }), { encoding: 'utf8' });

//   await execa('npm', ['i', '-C', modulePath], { cwd: modulePath });

//   const evalExpresion = `require("webpack-import-plugins")()`;
//   const webpackPath = await compileWebpackAndEvalOutput(modulePath, evalExpresion, {
//     cli: `${modulePath}/node_modules/.bin/webpack-cli`,
//   }, {
//     logger: console.log
//   });

//   t.log(`tempDir: ${modulePath}`);
//   t.is(webpackPath, `${cwd}/node_modules/webpack`);
// });
