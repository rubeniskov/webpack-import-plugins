# webpack-import-plugins

[![Build Status](https://travis-ci.org/rubeniskov/webpack-import-plugins.svg?branch=master)](https://travis-ci.org/rubeniskov/webpack-import-plugins)

Webpack plugin loader compatible with version 4 and version 5.

## Motivation

Many plugins are composed for [canonical plugins](https://webpack.js.org/plugins/) from the webpack module itself, the problem comes when the [nodejs resolution algorithm](https://nodejs.org/api/modules.html#modules_loading_from_node_modules_folders) tries to find the module in a [hoisted](https://github.com/lerna/lerna/blob/master/doc/hoist.md) file structure. Due the `webpack-cli` is execute at the root context, the module provided is incorret if there is a webpack module in a nested module, ie:

<img src="https://classic.yarnpkg.com/assets/posts/2018-02-15-nohoist/standalone-2.svg"/>

```texplain
dep-tree@1.0.0
├─┬ hoisted@1.0.0
│ └── webpack@5.0.0 deduped
├─┬ no-hoisted@1.0.0
│ └── webpack@4.0.0
└── webpack@5.0.0
```

In this case if `no-hoisted` module has a webpack compiler, it will resolve the modules from the `dep-tree` directory. 

Webpack 5 solve this using a instance of itself in the [compiler](https://github.com/webpack/webpack/blob/63d7671628322917c0b8c4e7f0de7de38446e91f/lib/Compiler.js#L188). But many libraries are stil using webpack 4. ie: [@storybook/react](https://www.npmjs.com/package/@storybook/react)

To solve this and keep the retrocompatibility this module solves the problem.

## How to use it

Just import the library and using `importWebpackPlugins` this will check if there is a plugin factory available, or delegates to the [custom module resolution](./lib/webpack-path#L18).

The plugin name must be defined with the category prefix if required, you can check the category in the `webpack@5` [internal plugins list](https://webpack.js.org/plugins/internal-plugins/) or for lazyness use the catalog file [v4](./wp-plugins-v4.json), [v5](./wp-plugins-v5.json).

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

