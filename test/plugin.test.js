const path = require('path');
const test = require('ava');

const {
  getWebpackExpectedVersionFromPkg,
  getWebpackPluginsPathsByVersion,
  compileWebpackAndEvalOutput,
  runDepTree,
  semver,
} = require('./fixtures/utils');

const resolvePluginsFromWebpackContext = async (cwd, plugins, opts) => {
  const evalExpresion = `((webpackPath, webpack, importWebpackPlugins) => ({
    webpackPath,
    webpackVersion: require(webpackPath+'/package.json').version,
    result: [
      ${plugins.map((pluginName) => `{
          pluginName: "${pluginName}",
          plugin: (() => {
            try {
              return typeof importWebpackPlugins(webpack).${pluginName} === 'function';
            } catch(err){
              return err.message;
            }
          })(),
      }`)},
  ]}))(
    global.webpackPath || require("webpack-import-plugins/lib/webpack-path")(),
    global.compiler && global.compiler.webpack,
    global.importWebpackPlugins || require("webpack-import-plugins")
  )`;
  return await compileWebpackAndEvalOutput(cwd, evalExpresion, opts);
}

runDepTree((module, _, mods) => {
  const modulePath = `${__dirname}/fixtures/${module}`
  const expectedVersion = getWebpackExpectedVersionFromPkg(modulePath);

  const pluginList = getWebpackPluginsPathsByVersion(/[0-9]/.exec(expectedVersion));
  const pluginNames = pluginList.map(({name}) => name);

  [{
    spec: 'config'
  }, {
    spec: 'plugin',
    config: 'config-plugin.js'
  }].forEach(({ spec, ...opts }) => {
    test.serial(`should resolve of webpack for ${module} using ${spec}`, async (t) => {

      const {
        webpackVersion,
        webpackPath,
        result: pluginAsserts
      } = await resolvePluginsFromWebpackContext(modulePath, pluginNames, opts);

      t.log(`detected webpack@${webpackVersion}`);
      t.plan(pluginAsserts.length * 2 + 2)
      t.log(`pluginNames: ${pluginNames.slice(0, 5).join(', ')} ... ${pluginNames.slice(-5).join(', ')}`);
      t.true(semver.satisfies(webpackVersion, expectedVersion));
      if (modulePath.endsWith('/hoisted')) {
        t.is(path.join(`${__dirname}/fixtures/${mods[0]}`, 'node_modules', 'webpack'), webpackPath);
      } else {
        t.is(path.join(modulePath, 'node_modules', 'webpack'), webpackPath);
      }

      pluginAsserts.forEach(({
        plugin, pluginName
      }, idx) => {

        t.is(pluginList[idx].name, pluginName);
        if (!plugin) {
          t.log(pluginName, plugin);
        }
        if (pluginList[idx].filename) {
          t.true(plugin);
        } else {
          t.regex(plugin, /has been deprecated. For more info visit/);
        }
      });
    });
  })

  test.serial(`should raise error when plugin doesn't exist in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result: pluginAsserts,
    } = await resolvePluginsFromWebpackContext(modulePath, ['FooBarPlugin']);

    t.log(`detected webpack@${webpackVersion}`);
    t.plan(pluginAsserts.length * 2);

    pluginAsserts.map(({
      pluginName, plugin
    }) => {
      t.is(pluginName, 'FooBarPlugin');
      t.false(plugin);
    });
  });
});
