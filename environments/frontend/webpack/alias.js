const path = require('path');
const rootPath = require('./path');

const alias = {
  'Api': path.join(rootPath, './src/api'),
  'Components': path.join(rootPath, './src/components'),
  'Hooks': path.join(rootPath, './src/hooks'),
  'Layouts': path.join(rootPath, './src/layouts'),
  'Pages': path.join(rootPath, './src/pages'),
  'Styles': path.join(rootPath, './src/styles'),
  'Utils': path.join(rootPath, './src/utils'),
  'react-dom': '@hot-loader/react-dom',
};

module.exports = alias;