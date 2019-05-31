module.exports = {
  rules: {
    'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
    'react/require-default-props': 'off'
  },

  overrides: [{
    files: '.storybook/*.js',
    rules: {
      'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
    }
  }]
};
