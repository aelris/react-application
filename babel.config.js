module.exports = {
  presets: [
    ['@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 2,
        targets: '> 0.25%, not dead',
      }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
