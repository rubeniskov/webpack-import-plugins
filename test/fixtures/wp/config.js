const path = require('path');
const fs = require('fs');

fs.writeFileSync(
  process.env.WEBPACK_TESTING_FILENAME,
  JSON.stringify(process.env.WEBPACK_TESTING_VALUE),
  { encoding: 'utf8' }
);

module.exports = {};
