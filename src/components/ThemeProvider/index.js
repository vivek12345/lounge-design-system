/** @jsx jsx */
import { jsx, ThemeContext, Global } from "@emotion/core";
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming";
import { useContext } from "react";
import { theme } from "../../theme";

const ThemeProvider = ({ children }) => (
  <EmotionThemeProvider theme={theme}>
    <Global
      styles={{
        "@font-face": {
          fontFamily: "Roboto, sans-serif",
          src:
            "url(https://fonts.googleapis.com/css?family=Roboto&display=swap) format(woff2)",
        },
      }}
    />
    {children}
  </EmotionThemeProvider>
);

const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (theme === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return theme;
};

export { ThemeProvider };
export { useTheme };
