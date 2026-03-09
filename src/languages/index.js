'use strict';

/**
 * Language handler registry.
 * To add a new language:
 *   1. Create src/languages/<language>.js with a format(filePath, style) function.
 *   2. Add an entry here mapping the language identifier to the handler.
 *   3. Register the file extensions in src/detector.js.
 */

const javascript = require('./javascript');

const LANGUAGE_FORMATTERS = {
  javascript: javascript,
  typescript: javascript, // TS uses the same Prettier-based handler
};

/**
 * Returns the formatter handler for a given language, or null if unsupported.
 * @param {string} language - Language identifier from detector.js.
 */
function getFormatter(language) {
  return LANGUAGE_FORMATTERS[language] || null;
}

module.exports = { getFormatter };
