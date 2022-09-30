const path = require('path');

const buildEslintCommand = filenames =>
  `next lint --fix --file ${filenames.map(f => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  '**/*.(ts|tsx)': () => 'tsc --noEmit',
  '*.{js,jsx,ts,tsx,css}': filenames => `prettier --write ${filenames.join(' ')}`,
  '*.{js,jsx,ts,tsx}': [buildEslintCommand],
};
