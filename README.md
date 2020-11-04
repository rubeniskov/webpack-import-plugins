# webpack-import-plugins

[![Build Status](https://travis-ci.org/rubeniskov/webpack-import-plugins.svg?branch=master)](https://travis-ci.org/rubeniskov/webpack-import-plugins)
![npm-publish](https://github.com/rubeniskov/webpack-import-plugins/workflows/npm-publish/badge.svg?branch=master)
[![Maintainability](https://api.codeclimate.com/v1/badges/0c5a7fd388d51eabd19a/maintainability)](https://codeclimate.com/github/rubeniskov/webpack-import-plugins/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/0c5a7fd388d51eabd19a/test_coverage)](https://codeclimate.com/github/rubeniskov/webpack-import-plugins/test_coverage)

Webpack plugin loader compatible with version 4 and version 5.

## Motivation

Many plugins are composed with [canonical plugins](https://webpack.js.org/plugins/) from the webpack module itself, the problem comes when `require("webpack/lib/<NameOfPlugin>")` is used inside a custom plugin which is expected to use the webpack version 4 and [nodejs resolution algorithm](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders) tries to find the module in a [hoisted](https://github.com/lerna/lerna/blob/master/doc/hoist.md) file structure. Due the `webpack-cli` is execute at the root context, the module provided could be wrong if is expected to load the local webpack module:

Webpack cli uses [import-local](https://github.com/webpack/webpack-cli/blob/564279e5b634a399647bcdb21449e5e6a7f0637e/packages/webpack-cli/bin/cli.js#L7) which ensures always use a the local instance of webpack, but in casuistics where the modules are hoisted, (such yarn workspaces) is where this kind of problems comes, https://github.com/sindresorhus/import-local/issues/7.

<img src="https://classic.yarnpkg.com/assets/posts/2018-02-15-nohoist/standalone-2.svg"/>

```texplain
dep-tree@1.0.0
├─┬ hoisted@1.0.0
│ └── webpack@5.0.0 deduped
├─┬ no-hoisted@1.0.0
│ └── webpack@4.0.0
└── webpack@5.0.0
```

If there is a case where `no-hoisted` module has a webpack compiler, it will resolve webpack from the `dep-tree` directory. 

Webpack 5 solve this using a instance of itself at the [compiler](https://github.com/webpack/webpack/blob/63d7671628322917c0b8c4e7f0de7de38446e91f/lib/Compiler.js#L188) instance, but many libraries are stil using webpack 4. ie: [@storybook/react](https://www.npmjs.com/package/@storybook/react).

To solve this and keep the retrocompatibility, this module comes to solve this problem.

- Check this issue to dive in deep: https://github.com/jantimon/html-webpack-plugin/issues/1546

## How to use it

Just import the library using `require('webpack-import-plugins')`, and call it with the name of plugin expected in webpack 5, this will check if there is a plugin factory available, or delegates to the [custom module resolution](./lib/webpack-path#L18).

The plugin name must be defined with the category prefix, if is required, you can check the categories in the `webpack@5` [internal plugins list](https://webpack.js.org/plugins/internal-plugins/) or for lazyness use the local auto generated catalog file [v4](./wp-plugins-v4.json), [v5](./wp-plugins-v5.json).

### Using `importWebpackPlugins` in webpack.config.js
```javascript

const importWebpackPlugins = require('webpack-import-plugins');
const NodeTemplatePlugin = importWebpackPlugins('node.NodeTemplatePlugin');

module.exports = {
  plugins: [new NodeTemplatePlugin(...)];
}

```

### Using `importWebpackPlugins` in a CustomPlugin 
```javascript
const importWebpackPlugins = require('webpack-import-plugins');

class CustomPlugin {
  constructor () {
    
  }

  apply(compiler) {
    // Single import
    const NodeTargetPlugin = importWebpackPlugins(compiler, 'node.NodeTargetPlugin');
    // Or multiples
    const [
        NodeTemplatePlugin, 
        LoaderTargetPlugin, 
        EntryPlugin, 
    ] = importWebpackPlugins(compiler, [
        'node.NodeTemplatePlugin',
        'LoaderTargetPlugin',
        'EntryPlugin'
    ]);
    // and use it!
    new NodeTemplatePlugin(...);
  } 
}
```

## Bonus track

Gets the version of the local webpack

```javascript
const { resolveWepack } = require('webpack-import-plugins');
const webpackVersion = () => {
  const { version } = require(resolveWebpack('package.json'));
  return version;
};
````

## References

- https://github.com/jantimon/html-webpack-plugin/issues/1546
- https://github.com/jantimon/html-webpack-plugin/pull/1547

