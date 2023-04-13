module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "airbnb-base",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "no-console": 0,
    quotes: 0,
    "class-methods-use-this": 0,
    "import/extensions": 0,
  },
};
