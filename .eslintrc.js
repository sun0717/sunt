module.exports = {
  extends: require.resolve('@umijs/lint/dist/config/eslint'),
  plugins: ['react-hooks', 'import'],
  ignorePatterns: ['dist', 'node_modules', '.eslintrc.js'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-types': 'warn',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/method-signature-style': 'off',
    '@typescript-eslint/no-invalid-this': 'off',
    'import/no-duplicates': 'error',
    'no-redeclare': 'off',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    'no-debugger': 'warn',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling', 'index'],
          'object',
          'type',
          'unknown',
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'builtin',
            patternOptions: {
              noComment: false,
            },
            position: 'before',
          },
          {
            pattern: '*/**/*.less',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '*/**/*.css',
            group: 'type',
            position: 'after',
          },
          {
            pattern: '@components/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: '@hooks/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
