'use strict';

module.exports = {
  id: 'google',
  name: 'Google',
  description: 'Google Style Guide — single quotes, semicolons, es5 trailing commas',
  prettierConfig: {
    semi:           true,
    singleQuote:    true,
    tabWidth:       2,
    useTabs:        false,
    printWidth:     80,
    trailingComma:  'es5',
    bracketSpacing: true,
    arrowParens:    'always',
  },
  eslintConfig: {
    extends: ['google'],
  },
};
