module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'array-callback-return': 'off',
    'no-unreachable': 'off',
    'import/first': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  }
}
