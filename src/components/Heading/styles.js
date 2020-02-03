const headingByType = ({ as }) => {
  const style = {
    h1: {
      fontFamily: "bold",
      fontSize: "3xl",
      letterSpacing: "wider",
      lineHeight: "tallest",
    },
    h2: {
      fontFamily: "bold",
      fontSize: "2xl",
      letterSpacing: "wider",
      lineHeight: "taller",
    },
    h3: {
      fontFamily: "bold",
      fontSize: "xl",
      letterSpacing: "wide",
      lineHeight: "base",
    },
    h4: {
      fontFamily: "bold",
      fontSize: "lg",
      letterSpacing: "normal",
      lineHeight: "base",
    },
    h5: {
      fontFamily: "bold",
      fontSize: "md",
      letterSpacing: "tight",
      lineHeight: "shorter",
    },
    h6: {
      fontFamily: "bold",
      fontSize: "sm",
      letterSpacing: "tighter",
      lineHeight: "shorter",
    },
  };
  return style[as];
};
const useHeadingStyles = ({ as }) => {
  return headingByType({ as });
};
export default useHeadingStyles;
