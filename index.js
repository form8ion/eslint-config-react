module.exports = {
  plugins: ['react-hooks'],

  parser: 'babel-eslint',

  env: {
    browser: true
  },

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
    'react/destructuring-assignment': ['error', 'always', {ignoreClassFields: true}],
    'react/jsx-props-no-spreading': ['error', {custom: 'ignore'}],
    'jsx-a11y/label-has-associated-control': ['error', {assert: 'either'}]
  },

  overrides: [
    {
      files: [
        '.storybook/**/*.js',
        'src/**/stories.js',
        '**/*-test.js',
        'test/integration/features/step_definitions/**/*-steps.js'
      ],
      globals: {
        window: 'readonly',
        document: 'readonly'
      },
      rules: {
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-boolean-value': ['error', 'always'],
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off'
      }
    }
  ]
};
