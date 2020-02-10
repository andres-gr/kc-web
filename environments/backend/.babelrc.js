const alias = require('./alias');

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript'
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
          '.ts',
        ],
      },
    ],
  ],
};
