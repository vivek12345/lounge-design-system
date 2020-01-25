module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
