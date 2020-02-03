module.exports = {
  stories: ["../src/**/*.stories.(js|mdx)"],
  presets: ["@storybook/addon-docs/preset"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-knobs",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-storysource",
    "@storybook/addon-a11y",
  ],
};
