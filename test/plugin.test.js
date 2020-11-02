const test = require('ava');
const {
  getWebpackExpectedVersionFromPkg,
  compileWebpackAndEvalOutput,
  runDepTree,
  semver
} = require('./fixtures/utils');

const resolvePluginFromWebpackContextInsideCustomPlugin = async (cwd, plugin, opts) => {
  const evalExpresion = `{
    webpackVersion: require(webpackPath()+'/package.json').version,
    webpack: compiler.webpack ? Object.keys(compiler.webpack) : false,
    result: (() => { try { return typeof importWebpackPlugins(compiler, ${plugin ? `"${plugin}"` : undefined}) === 'function' } catch(err){ return err.message }})(),
  }`;
  return await compileWebpackAndEvalOutput(cwd, evalExpresion, { ...opts, config: 'config-plugin.js' });
}

runDepTree((module) => {
  const modulePath = `${__dirname}/fixtures/${module}`;
  const expectedVersion = getWebpackExpectedVersionFromPkg(modulePath);

  test.serial(`should resolve the plugin using the singleton when available in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result
    } = await resolvePluginFromWebpackContextInsideCustomPlugin(modulePath, 'node.NodeTemplatePlugin');
    t.log(`detected webpack@${webpackVersion}`);
    t.true(semver.satisfies(webpackVersion, expectedVersion));
    t.true(result);
  });

  test.serial(`should raise error when plugin not exist in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result,
    } = await resolvePluginFromWebpackContextInsideCustomPlugin(modulePath, 'FooBarPlugin');
    t.log(`detected webpack@${webpackVersion}`);
    t.true(result.startsWith('Webpack plugin not found FooBarPlugin'));
  });

  test.serial(`should raise error when plugin is empty in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result,
    } = await resolvePluginFromWebpackContextInsideCustomPlugin(modulePath, null);

    t.log(`detected webpack@${webpackVersion}`);
    t.true(result.startsWith('importWebpackPluginFromSingleton pluginName must be an string'));
  });

  test.serial(`should return an array of existing plugins in "${module}"`, async (t) => {
    const pluginNames = ['BannerPlugin', 'DefinePlugin'];
    const evalExpresion = `{
      webpackVersion: require(webpackPath()+'/package.json').version,
      result: importWebpackPlugins(compiler, ${JSON.stringify(pluginNames)}).map((v) => typeof v),
    }`;

    const { webpackVersion, result } = await compileWebpackAndEvalOutput(modulePath, evalExpresion, {
      config: 'config-plugin.js'
    });

    t.log(`detected webpack@${webpackVersion}`);

    t.deepEqual(result, ['function', 'function']);
  });
});
