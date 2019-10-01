module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    strict: 'off',
    'no-var': 'off',
    'class-methods-use-this': 'off',
    'lines-between-class-members': 'off',
    'dot-notation': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-shadow': 'off',
    'no-undef': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'no-plusplus': 'off',
    'import/no-cycle': 'off',
    'import/no-unresolved': 'off',
    'spaced-comment': 'off',
    'no-else-return': 'off',
    'import/order': 'off',
    'import/newline-after-import': 'off',
    'import/first': 'off',
    'prefer-const': 'off'
  }
};
