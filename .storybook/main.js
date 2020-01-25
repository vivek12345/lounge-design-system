
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: [
    '../src/**/*.stories.js',
    '../src/**/*.stories.mdx',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-docs'
  ],
};