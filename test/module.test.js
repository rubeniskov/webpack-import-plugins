const test = require('ava');
const path = require('path');
const {
  getWebpackExpectedVersionFromPkg,
  getWebpackPluginsPathsByVersion,
  compileWebpackAndEvalOutput,
  runDepTree,
  truncate,
  semver,
} = require('./fixtures/utils');

const resolvePluginsFromWebpackContext = async (cwd, plugins, opts) => {
  const evalExpresion = `{
    webpackPath: require("webpack-import-plugins/lib/webpack-path")(),
    webpackVersion: require(require("webpack-import-plugins/lib/webpack-path")()+'/package.json').version,
    result: [
      ${plugins.map((pluginName) => `{
          pluginName: ${pluginName ? `"${pluginName}"` : undefined},
          pluginPath: (() => { try { return require("webpack-import-plugins").resolveWebpackPluginFromModule(${pluginName ? `"${pluginName}"` : undefined}) } catch(err){ return err.message }})(),
          isLoadable: (() => { try { return typeof require("webpack-import-plugins")(${pluginName ? `"${pluginName}"` : undefined}) === 'function' } catch(err){ return false }})(),
      }`)}
  ]}`;
  return await compileWebpackAndEvalOutput(cwd, evalExpresion, opts);
}

runDepTree((module) => {
  const modulePath = `${__dirname}/fixtures/${module}`
  const expectedVersion = getWebpackExpectedVersionFromPkg(modulePath);

  const pluginList = getWebpackPluginsPathsByVersion(/[0-9]/.exec(expectedVersion));
  const pluginNames = pluginList.map(({name}) => name);
  
  test.serial(`should resolve of webpack for ${module}`, async (t) => {
    const {
      webpackVersion,
      webpackPath,
      result: pluginAsserts
    } = await resolvePluginsFromWebpackContext(modulePath, pluginNames);
    
    t.log(`detected webpack@${webpackVersion}`);
    t.plan(pluginAsserts.length * 4 + 1)
    t.log(`pluginNames: ${pluginNames.slice(0, 5).join(', ')} ... ${pluginNames.slice(-5).join(', ')}`);
    t.true(semver.satisfies(webpackVersion, expectedVersion));
    pluginAsserts.forEach(({ 
      pluginName, pluginPath, isLoadable
    }, idx) => {
      t.is(typeof pluginPath, 'string');
      t.is(pluginList[idx].name, pluginName);
      if (pluginList[idx].filename) {
        t.is(path.join(webpackPath, pluginList[idx].filename), pluginPath);
        t.true(isLoadable);
      } else {
        // deprecated
        t.true(pluginPath.startsWith(`findWebpackPluginPath: ${pluginList[idx].name} has been deprecated.`));
        t.false(isLoadable);
      }
    });
  });

  test.serial(`should raise error when plugin doesn't exist in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result: pluginAsserts,
    } = await resolvePluginsFromWebpackContext(modulePath, ['FooBarPlugin']);
    
    t.log(`detected webpack@${webpackVersion}`);
    t.plan(pluginAsserts.length * 3);

    pluginAsserts.map(({
      pluginName, pluginPath, isLoadable
    }) => {
      t.is(pluginName, 'FooBarPlugin');
      t.is(pluginPath, 'resolveWebpackPluginFromModule: module not found: FooBarPlugin');
      t.false(isLoadable);
    });
  });

  test.serial(`should raise error when plugin is empty in module "${module}"`, async (t) => {
    const {
        webpackVersion,
        result: pluginAsserts,
    } = await resolvePluginsFromWebpackContext(modulePath, [undefined]);
    
    t.log(`detected webpack@${webpackVersion}`);
    t.plan(pluginAsserts.length * 3);

    pluginAsserts.map(({
      pluginName, pluginPath, isLoadable
    }) => {
      t.falsy(pluginName);
      t.is(pluginPath, 'resolveWebpackPluginFromModule module name can not be empty');
      t.false(isLoadable);
    });
  });
});