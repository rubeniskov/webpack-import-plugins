// Strong based in https://github.com/sindresorhus/import-local/blob/master/index.js

// tricky method to obtain in nodejs the top module which in case of webpack.config is
// the module who request the compilation and always should be the first one.
// has long time support more info...
// https://nodejs.org/api/modules.html#modules_require_cache
// Added in: v0.3.0
const path = require('path');
const resolve = require('resolve');
const findUp = require('find-up');
const rootMain = Object.keys(require.cache).filter((filename) => {
  // Ignore preloaded local modules
  const ignoredModulesDir = path.join(path.dirname(__dirname), 'node_modules');
  return !filename.startsWith(ignoredModulesDir);
})[0];

module.exports = () => {
  try {
    const rootModulePkg = findUp.sync('package.json', {
      cwd: path.dirname(rootMain),
    });
    // skip if do not found rootModulePkg
    if (!rootModulePkg) {
      throw new Error('');
    }

    // Checks if rootModule is webpack itself
    const { name: rootModuleName } = require(rootModulePkg);
    if (rootModuleName === 'webpack'){
      return path.dirname(rootModulePkg);
    }

    const webpackMainFile = resolve.sync('webpack', {
      moduleDirectory: path.join(path.dirname(rootModulePkg), 'node_modules'),
      preserveSymlinks: true,
    }); 

    const webpackModulePkg = findUp.sync('package.json', {
      cwd: path.dirname(webpackMainFile),
    });

    // skip if do not found webpackModulePkg
    if (!webpackModulePkg) {
      throw new Error('');
    }

    return path.dirname(webpackModulePkg);
  } catch (_) {
    // default way to resolve webpack
    return path.dirname(require.resolve('webpack/package.json'));
  }
};
