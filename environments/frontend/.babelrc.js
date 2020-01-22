const alias = require('./webpack/alias');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-decorators',
      { legacy: true },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      { loose: true },
    ],
    [
      'module-resolver',
      {
        alias,
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ],
      },
    ],
    'react-hot-loader/babel',
  ],
};
