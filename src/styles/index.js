'use strict';

/**
 * Style registry — ordered list shown to the user in the CLI menu.
 * To add a new style:
 *   1. Create src/styles/<name>.js exporting { id, name, description, prettierConfig, eslintConfig }.
 *   2. require() it here and add it to the array.
 */

const prettierDefault = require('./prettier-default');
const airbnb          = require('./airbnb');
const standard        = require('./standard');
const google          = require('./google');
const xo              = require('./xo');

module.exports = [
  prettierDefault,
  airbnb,
  standard,
  google,
  xo,
];
