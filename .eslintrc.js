module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/essential',
    'plugin:prettier/recommended'
  ],
  plugins: ['import'],
  rules: {
    'global-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/newline-after-import': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-use-before-define': 0,
    'no-console': 0
  },
  globals: {
    __static: true
  }
}
