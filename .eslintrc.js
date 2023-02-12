module.exports = {
  root: true,

  env: {
    browser: true,
    es2021: true,
    node: true
  },

  extends: [
    '@nuxtjs/eslint-config-typescript'
  ],

  overrides: [
    {
      files: ['src/layouts/*.vue', 'src/pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 0
      }
    }
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 1
      },
      multiline: {
        max: 1
      }
    }],

    'max-len': ['error', {
      code: 120,
      tabWidth: 4
    }],

    semi: ['error', 'always']
  }
};
