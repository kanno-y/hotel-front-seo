/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'import',
    'eslint-plugin-sort-keys-fix',
  ],
  rules: {
    // eslint-plugin-importのルール。
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    'import/order': [
      'error',
      {
        alphabetize: { caseInsensitive: true, order: 'asc' },
        groups: [
          'builtin',
          'external',
          'internal',
          'index',
          'sibling',
          'parent',
          'object',
        ],
        'newlines-between': 'always',
        pathGroups: [
          {
            group: 'index',
            pattern: 'src/actions/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/components/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/constants',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/containers/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/hooks/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/reducers/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/store/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/styles/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'src/utils/**',
            position: 'before',
          },
          {
            group: 'index',
            pattern: 'typings/**',
            position: 'before',
          },
          {
            group: 'parent',
            pattern: '../public/**',
            position: 'after',
          },
          {
            group: 'parent',
            pattern: '../../public/**',
            position: 'after',
          },
          {
            group: 'parent',
            pattern: '../../../public/**',
            position: 'after',
          },
          {
            group: 'parent',
            pattern: '../../../../public/**',
            position: 'after',
          },
          {
            group: 'parent',
            pattern: '../../../../../public/**',
            position: 'after',
          },
        ],
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    'sort-vars': ['error', { ignoreCase: true }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        config: 'tsconfig.json',
      },
    },
    react: {
      version: 'detect', // React version. "detect" automatically picks the version you have installed.
    },
  },
}
