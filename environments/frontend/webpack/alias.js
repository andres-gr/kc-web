const path = require('path');
const rootPath = require('./path');

const alias = {
  'Components': path.join(rootPath, './src/components'),
  'react-dom': '@hot-loader/react-dom',
};

module.exports = alias;
