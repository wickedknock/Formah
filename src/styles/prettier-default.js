'use strict';

module.exports = {
  id: 'prettier',
  name: 'Prettier',
  description: 'Official Prettier defaults — double quotes, semicolons, 80-char lines',
  prettierConfig: {
    semi:           true,
    singleQuote:    false,
    tabWidth:       2,
    useTabs:        false,
    printWidth:     80,
    trailingComma:  'all',
    bracketSpacing: true,
    arrowParens:    'always',
  },
  // Reserved for future "generate config files" feature
  eslintConfig: {
    extends: ['prettier'],
  },
};
