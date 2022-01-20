module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': 'off',
    'no-unused-expressions': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'linebreak-style': 2,
  },
};
