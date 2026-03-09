'use strict';

module.exports = {
  id: 'standard',
  name: 'Standard JS',
  description: 'StandardJS — single quotes, NO semicolons, community favorite',
  prettierConfig: {
    semi:           false,
    singleQuote:    true,
    tabWidth:       2,
    useTabs:        false,
    printWidth:     80,
    trailingComma:  'none',
    bracketSpacing: true,
    arrowParens:    'always',
  },
  eslintConfig: {
    extends: ['standard'],
  },
};
