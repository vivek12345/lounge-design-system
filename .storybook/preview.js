import { addDecorator, configure } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/components/ThemeProvider";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

addDecorator(story => <AppProvider>{story()}</AppProvider>);

configure(loadStories, module);
