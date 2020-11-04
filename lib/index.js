// @ts-check
// Import types
/** @typedef {import("webpack/lib/Compiler.js")} WebpackCompiler */
/** @typedef {import("webpack/lib/webpack.js")} WebpackFunctionSingle */
/** @typedef {import("webpack/lib/webpack.js")} WebpackFunctionMulti */
'use strict';

const path = require('path');
const isError = require('is-error');
const debug = require('debug')('webpack-import-plugins');
const getWebpackModulePath = require('./webpack-path');

const camelToKebab = (string) => {
  return string.replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + "-" + m[1];
  }).toLowerCase();
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

/** Search plugin path from the available list of plugins */
const findWebpackPluginPath = (pluginName) => {
  const {
    version: webpackVersion,
  } = require(path.join(getWebpackModulePath(), 'package.json'));
  const plugins = require(`../wp-plugins-v${webpackVersion.split('.')[0]}.json`);
  const { name, filename } = plugins.find(({ name }) => name === pluginName) || {};
  if (name && !filename) {
    const nameChunks = name.split('.');
    const urlName = camelToKebab(nameChunks[nameChunks.length - 1]);
    throw new Error(`findWebpackPluginPath: ${name} has been deprecated. \n for more info visit: https://webpack.js.org/plugins/${urlName}/`);
  }
  return filename;
};

/**
 * Resolve webpack plugins from requester based on the top module
 *
 * @param {String} moduleNameOrRelPath Webpack internal modules
 * @returns {String}
 */
const resolveWebpackPluginFromModule = (moduleNameOrRelPath) => {
  if (!moduleNameOrRelPath) {
    throw new TypeError(`resolveWebpackPluginFromModule module name can not be empty`);
  }

  const pluginFilename = findWebpackPluginPath(moduleNameOrRelPath);
  if (!pluginFilename) {
    throw new Error(`resolveWebpackPluginFromModule: module not found: ${moduleNameOrRelPath}`);
  }
  debug(`resolveWebpackPluginFromModule ->  modulePath: %s`, pluginFilename);
  return resolveWebpack(pluginFilename);
};

/**
 * Resolve webpack plugins from wepack singleton
 *
 * @param {WebpackFunctionSingle & WebpackFunctionMulti} webpack
 * @param {String} moduleNameOrRelPath Webpack internal modules
 * @returns {any}
 */
const importWebpackPluginFromSingleton = (webpack, moduleNameOrRelPath) => {
  if (typeof moduleNameOrRelPath !== 'string') {
    throw new TypeError(`importWebpackPluginFromSingleton pluginName must be an string,
      ie: "LoaderOptionsPlugin" or "node.NodeTemplatePlugin"
    `);
  }

  const pluginJPath = moduleNameOrRelPath.split('.');
  const resolvedPlugin = pluginJPath.reduce((prev, frag) => prev && prev[frag], webpack);

  if (!resolvedPlugin || webpack === resolvedPlugin) {
    throw new Error(`importWebpackPluginFromSingleton: module not found: ${moduleNameOrRelPath}`);
  }

  debug(`importWebpackPluginFromSingleton ->  pluginJPath: %s`, moduleNameOrRelPath);

  return resolvedPlugin;
};

const catchException = (msg, spec) => {
  try {
    return spec();
  } catch (ex) {
    if (!new RegExp(msg, 'g').test(ex.message)) {
      throw ex;
    }
    return ex;
  }
};

/**
 * Import webpack plugin with auto strategy module resolution
 *
 * @param {WebpackCompiler} compiler Webpack compiler
 * @param {String} pluginName Webpack plugin or plugins names
 * @return {any|any[]}
 */
const importWebpackPluginAuto = (compiler, pluginName) => {
  let result;
  const {
    /** @type {WebpackFunctionSingle & WebpackFunctionMulti} */
    webpack,
  } = compiler || {};
  // Allows multipe strategies to find modules, catching "module not found" errors
  const catchMNFErr = catchException.bind(null, "module not found");

  if (webpack) {
    result = catchMNFErr(() => importWebpackPluginFromSingleton(webpack, pluginName));
  }

  if (!webpack || isError(result)) {
    result = catchMNFErr(() => require(resolveWebpackPluginFromModule(pluginName)));
  }

  if (isError(result)) {
    throw Error(`Webpack plugin not found ${pluginName}: ${result.message}`);
  }

  return result;
};

/**
 * Import webpack plugins detecting which strategy to use
 *
 * @param {WebpackCompiler|null} compiler Webpack compiler
 * @param {String|String[]} plugins Webpack plugin or plugins names ie: "node.NodeTemplatePlugin" or ["LoaderOptionsPlugin"]
 * @return {any|any[]}
 */
const importWebpackPlugins = (compiler, plugins) => {
  if (typeof compiler === 'string' || Array.isArray(compiler)) {
    plugins = compiler;
    compiler = null;
  }

  let pluginArray = Array.isArray(plugins) ? plugins : [plugins];
  debug('importWebpackPlugins -> [ %s ]', pluginArray.join(', '));

  const resolvePlugins = pluginArray.map(importWebpackPluginAuto.bind(null, compiler));

  return Array.isArray(plugins) ? resolvePlugins : resolvePlugins[0];
};

module.exports = importWebpackPlugins;
module.exports.resolveWebpack = resolveWebpack;
module.exports.resolveWebpackPluginFromModule = resolveWebpackPluginFromModule;
