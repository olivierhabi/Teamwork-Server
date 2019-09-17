// module.exports = {
//   extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
//   plugins: ['prettier'],
//   rules: {
//     'prettier/prettier': 'warn',
//     'no-unused-vars': 'warn',
//     'no-console': 'off',
//     'func-names': 'off',
//     'no-process-exit': 'off',
//     'object-shorthand': 'off',
//     strict: 'off',
//     'no-var': 'off'
//   }
// };
module.exports = {
  // parserOptions: {
  //   ecmaVersion: 6,
  //   sourceType: 'module'
  // },
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'warn',
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'func-names': 'off',
    'no-process-exit': 'off',
    'object-shorthand': 'off',
    strict: 'off',
    'no-var': 'off'
  }
};
