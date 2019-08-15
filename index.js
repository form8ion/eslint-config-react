module.exports = {
  plugins: ['react-hooks'],

  parser: 'babel-eslint',

  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/require-default-props': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },

  overrides: [{
    files: '.storybook/*.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
  }]
};
