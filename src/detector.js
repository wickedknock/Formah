'use strict';

const path = require('path');

/**
 * Maps file extensions to language identifiers.
 * Add new entries here when adding support for more languages.
 */
const EXTENSION_TO_LANGUAGE = {
  '.js':  'javascript',
  '.jsx': 'javascript',
  '.mjs': 'javascript',
  '.cjs': 'javascript',
  '.ts':  'typescript',
  '.tsx': 'typescript',
};

/**
 * Detects the language of a file based on its extension.
 * @param {string} filePath - Absolute or relative path to the file.
 * @returns {string|null} Language identifier, or null if unsupported.
 */
function detectLanguage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return EXTENSION_TO_LANGUAGE[ext] || null;
}

/**
 * Returns a human-readable list of supported extensions.
 */
function supportedExtensions() {
  return Object.keys(EXTENSION_TO_LANGUAGE).join(', ');
}

module.exports = { detectLanguage, supportedExtensions, EXTENSION_TO_LANGUAGE };
