module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: ['plugin:@typescript-eslint/recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parseOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    warnOnUnsupportedTypeScriptVersion: false,
    extraFileExtensions: ['.vue'],
  },
  plugin: ['@typescript-eslint'],
  rules: {
    quotes: ['error', 'single'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'vue/v-bind-style': 'off',
    'vue/v-on-style': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        ignore: [
          'keep-alive',
          'transition',
          'transition-group',
          'component',
          'slot',
          'router-link',
          'router-view',
          'nuxt-link',
        ],
      },
    ],
  },
};