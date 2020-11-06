//@ts-check
const fs = require('fs');
const importWebpackPlugins = require('webpack-import-plugins');
const webpackPath = require('webpack-import-plugins/lib/webpack-path')();

class CustomPlugin {
  constructor(deferred) {
    this.deferred = deferred;
  }
  apply(compiler) {
    const [path, content] = this.deferred(compiler, importWebpackPlugins, webpackPath);
    fs.writeFileSync(path, content, { encoding: 'utf8' });
  }
}

module.exports = CustomPlugin;
