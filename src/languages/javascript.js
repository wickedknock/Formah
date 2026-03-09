'use strict';

const fs   = require('fs');
const path = require('path');
const prettier = require('prettier');

/**
 * Maps file extensions to the Prettier parser they require.
 * babel-ts handles TSX (JSX + TypeScript), typescript handles plain TS.
 */
const PARSER_MAP = {
  '.js':  'babel',
  '.jsx': 'babel',
  '.mjs': 'babel',
  '.cjs': 'babel',
  '.ts':  'typescript',
  '.tsx': 'babel-ts',
};

/**
 * Formats a JS/TS file in-place using the given style's Prettier config.
 * @param {string} filePath - Absolute path to the file.
 * @param {object} style    - A style definition object from src/styles/.
 */
async function format(filePath, style) {
  const ext    = path.extname(filePath).toLowerCase();
  const parser = PARSER_MAP[ext] || 'babel';
  const code   = fs.readFileSync(filePath, 'utf8');

  const formatted = await prettier.format(code, {
    ...style.prettierConfig,
    parser,
  });

  fs.writeFileSync(filePath, formatted, 'utf8');
}

module.exports = { format };
