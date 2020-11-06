const CustomPlugin = require('custom-plugin');

module.exports = {
  plugins: [
    new CustomPlugin((compiler, importWebpackPlugins, webpackPath) => {
      global.compiler = compiler;
      global.importWebpackPlugins = importWebpackPlugins;
      global.webpackPath = webpackPath;
      return [
        process.env.WEBPACK_TESTING_FILENAME,
        JSON.stringify(process.env.WEBPACK_TESTING_VALUE),
      ];
    }),
  ],
};
