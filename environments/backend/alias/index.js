const path = require('path');
const rootPath = require('./path');

const alias = {
  'Startup': path.resolve(rootPath, 'src/startup'),
};

module.exports = alias;

