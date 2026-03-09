'use strict';

const path     = require('path');
const fs       = require('fs');
const inquirer = require('inquirer');
const chalk    = require('chalk');
const ora      = require('ora');

const { detectLanguage, supportedExtensions } = require('./detector');
const { getFormatter }                        = require('./languages');
const styles                                  = require('./styles');

async function run() {
  const args     = process.argv.slice(2);
  const filePath = args[0];

  // ── Validate arguments ────────────────────────────────────────────────────
  if (!filePath) {
    console.error(chalk.red('\n  Error: No file specified.\n'));
    console.log(`  Usage:   ${chalk.cyan('formah')} ${chalk.yellow('<file>')}`);
    console.log(`  Example: ${chalk.cyan('formah')} ${chalk.yellow('index.js')}\n`);
    process.exit(1);
  }

  const absolutePath = path.resolve(filePath);

  if (!fs.existsSync(absolutePath)) {
    console.error(chalk.red(`\n  Error: File not found — ${absolutePath}\n`));
    process.exit(1);
  }

  // ── Detect language ───────────────────────────────────────────────────────
  const language = detectLanguage(absolutePath);

  if (!language) {
    const ext = path.extname(absolutePath) || '(no extension)';
    console.error(chalk.red(`\n  Error: Unsupported file type "${ext}".\n`));
    console.log(`  Supported: ${chalk.gray(supportedExtensions())}\n`);
    process.exit(1);
  }

  // ── Resolve formatter for the detected language ───────────────────────────
  const formatter = getFormatter(language);

  if (!formatter) {
    console.error(chalk.red(`\n  Error: No formatter registered for language: ${language}\n`));
    process.exit(1);
  }

  // ── Header ────────────────────────────────────────────────────────────────
  console.log(
    '\n ' + chalk.bold.hex('#00D4FF')('formah') +
    chalk.gray(' — instant style formatting'),
  );
  console.log(chalk.gray(`\n  File     : ${absolutePath}`));
  console.log(chalk.gray(`  Language : ${language}\n`));

  // ── Style picker ──────────────────────────────────────────────────────────
  const { selectedStyleId } = await inquirer.prompt([
    {
      type:    'list',
      name:    'selectedStyleId',
      message: 'Pick a formatting style:',
      choices: styles.map((style) => ({
        name:  `${chalk.white(style.name.padEnd(18))} ${chalk.gray(style.description)}`,
        value: style.id,
        short: style.name,
      })),
    },
  ]);

  const style = styles.find((s) => s.id === selectedStyleId);

  // ── Format ────────────────────────────────────────────────────────────────
  const spinner = ora(`  Formatting with ${chalk.bold(style.name)}...`).start();

  try {
    await formatter.format(absolutePath, style);
    spinner.succeed(
      chalk.green('  Done! ') +
      `Formatted ${chalk.cyan(path.basename(absolutePath))} ` +
      `with ${chalk.bold(style.name)}`,
    );
    console.log(chalk.gray(`\n  Saved: ${absolutePath}\n`));
  } catch (err) {
    spinner.fail(chalk.red('  Formatting failed.'));
    console.error(chalk.red(`\n  ${err.message}\n`));
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(chalk.red(`\n  Unexpected error: ${err.message}\n`));
  process.exit(1);
});
