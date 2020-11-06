// @ts-check
/** @typedef {import("../wp-plugins-v4").WebpackPlugins} WebpackPluginsV4 */
/** @typedef {import("../wp-plugins-v5").WebpackPlugins} WebpackPluginsV5 */
/** @typedef {import("webpack/lib/index")} WebpackPlugins */
'use strict';

const path = require('path');
const debug = require('debug')('webpack-import-plugins');
const getWebpackModulePath = require('./webpack-path');
const webpackPath = getWebpackModulePath();
const pluginByVersions = {
  v4: require('../wp-plugins-v4'),
  v5: require('../wp-plugins-v5'),
};

/**
 * Gets webpack modules based on the top module
 *
 * @param {string} [moduleName]
 * @returns {string} resolved path
 */
const resolveWebpack = (moduleName = '') => {
  const webpackModulePath = getWebpackModulePath();
  debug(`resolveWebpack ->  webpackModulePath: "%s"`, webpackModulePath);
  return require.resolve(path.join(webpackModulePath, moduleName));
};

const importWebpack4Plugins = () => {
  return pluginByVersions.v4(webpackPath);
};
const importWebpack5Plugins = () => {
  return pluginByVersions.v5(webpackPath);
};
/**
 * Import webpack plugins detecting which strategy to use
 *
 * @param {WebpackPlugins} [webpack]
 * @returns {WebpackPluginsV4|WebpackPluginsV5}
 */
const importWebpackPlugins = (webpack) => {
  const {
    version: localWebpackVersion,
  } = require(resolveWebpack('package.json'));

  if (localWebpackVersion.split('.')[0] === '4') {
    return importWebpack4Plugins();
  }

  if (webpack) {
    return webpack;
  }

  return importWebpack5Plugins();
};

module.exports = importWebpackPlugins;
module.exports.importWebpack4Plugins = importWebpack4Plugins;
module.exports.importWebpack5Plugins = importWebpack5Plugins;
module.exports.resolveWebpack = resolveWebpack;
