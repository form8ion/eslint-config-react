module.exports = {
  plugins: ['react-hooks'],

  parser: 'babel-eslint',

  extends: [
    'airbnb/rules/react',
    'airbnb/rules/react-a11y',
    'airbnb/hooks'
  ],

  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/state-in-constructor': ['error', 'never'],
    'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}]
  },

  overrides: [{
    files: '.storybook/*.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
  }]
};
