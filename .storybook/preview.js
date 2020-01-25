import { addDecorator } from "@storybook/react";
import React from "react";
import { ThemeProvider } from "../src/components/ThemeProvider";


const AppProvider = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

addDecorator(story => <AppProvider>{story()}</AppProvider>);

