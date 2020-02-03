const variantProps = ({ variant }) => {
  const styles = {
    default: {
      bg: "white",
      borderLeft: "4px",
    },
    info: {
      bg: "blue.50",
      borderLeft: "4px",
      borderColor: "blue.200",
    },
    error: {
      bg: "red.50",
      borderLeft: "4px",
      borderColor: "red.200",
    },
    success: {
      bg: "green.50",
      borderLeft: "4px",
      borderColor: "green.200",
    },
    warning: {
      bg: "yellow.50",
      borderLeft: "4px",
      borderColor: "yellow.200",
    },
  };
  return styles[variant];
};
const baseProps = {
  display: "flex",
  flexDirection: "column",
  position: "relative",
  color: "#101010",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "md",
  boxSizing: "border-box",
  overflow: "hidden",
  width: "md",
  fontStyle: "normal",
  fontWeight: "normal",
  fontSize: "md",
  lineHeight: "base",
  py: "4",
  px: "4",
};

const useNotificationStyles = ({ variant, visible }) => {
  return {
    ...baseProps,
    ...variantProps({ variant }),
    display: visible ? "flex" : "none",
  };
};

export const useCloseIconStyles = () => {
  return {
    position: "absolute",
    right: 0,
    top: 0,
    px: 6,
    py: 4,
  };
};

export default useNotificationStyles;
