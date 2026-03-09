'use strict';

module.exports = {
  id: 'xo',
  name: 'XO',
  description: 'XO — strict & opinionated, tabs for indentation, double quotes',
  prettierConfig: {
    semi:           true,
    singleQuote:    false,
    tabWidth:       4,
    useTabs:        true,
    printWidth:     80,
    trailingComma:  'all',
    bracketSpacing: true,
    arrowParens:    'always',
  },
  eslintConfig: {
    extends: ['xo', 'prettier'],
  },
};
