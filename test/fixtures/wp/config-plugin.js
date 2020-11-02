const CustomPlugin = require('custom-plugin');

module.exports = {
  plugins: [new CustomPlugin((compiler, importWebpackPlugins, webpackPath) => [
      process.env.WEBPACK_TESTING_FILENAME,
      JSON.stringify(process.env.WEBPACK_TESTING_VALUE),
    ])
  ]
};
