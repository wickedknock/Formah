'use strict';

module.exports = {
  id: 'airbnb',
  name: 'Airbnb',
  description: 'Airbnb Style Guide — single quotes, semicolons, 100-char lines',
  prettierConfig: {
    semi:           true,
    singleQuote:    true,
    tabWidth:       2,
    useTabs:        false,
    printWidth:     100,
    trailingComma:  'all',
    bracketSpacing: true,
    arrowParens:    'always',
  },
  eslintConfig: {
    extends: ['airbnb', 'prettier'],
  },
};
