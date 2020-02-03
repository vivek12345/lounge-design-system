import { theme } from "../../theme";
////////////////////////////////////////////////////////////

const solidTypeProps = ({ variant }) => {
  let commonStyles = {
    bg: `${variant}`,
    color: "white",
    "&:disabled": {
      ...disabledProps,
      bg: "gray.400",
      color: "gray.100",
    },
  };
  let style = {
    primary: {
      "&:hover:not([disabled])": {
        bg: "blue.400",
      },
      "&:active:not([disabled])": {
        bg: "blue.500",
      },
    },
    secondary: {
      "&:hover:not([disabled])": {
        bg: "gray.950",
      },
      "&:active:not([disabled])": {
        bg: "gray.800",
      },
    },
  };

  return {
    ...commonStyles,
    ...style[variant],
  };
};
////////////////////////////////////////////////////////////

const linkTypeProps = ({ variant }) => {
  let styles = {
    color: variant,
    "&:disabled": {
      ...disabledProps,
      color: "gray.400",
    },
    "&:hover:not([disabled])": {
      bg: "gray.100",
      color: "blue.400",
    },
    "&:active:not([disabled])": {
      bg: "gray.200",
      color: "blue.500",
    },
  };

  return styles;
};

////////////////////////////////////////////////////////////

const outlineTypeProps = props => {
  const { variant } = props;

  const commonStyles = {
    border: "1px",
    borderColor: variant,
    color: `${variant}`,
    bg: "transparent",
    "&:disabled": {
      ...disabledProps,
      borderColor: "gray.400",
      color: "gray.400",
    },
  };
  const style = {
    primary: {
      "&:hover:not([disabled])": {
        borderColor: "blue.400",
      },
      "&:active:not([disabled])": {
        borderColor: "blue.500",
      },
    },
    secondary: {
      "&:hover:not([disabled])": {
        borderColor: "gray.950",
      },
      "&:active:not([disabled])": {
        borderColor: "gray.800",
      },
    },
  };

  return {
    ...commonStyles,
    ...style[variant],
  };
};

////////////////////////////////////////////////////////////

const baseProps = {
  display: "inline-flex",
  appearance: "none",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 250ms",
  userSelect: "none",
  position: "relative",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  lineHeight: "1.2",
  outline: "none",
  borderRadius: "md",
  border: "none",
  fontWeight: "medium",
  "&:hover": {
    cursor: "pointer",
  },
};

////////////////////////////////////////////////////////////

const sizes = {
  lg: {
    height: 12,
    minWidth: 32,
    fontSize: "lg",
    px: 6,
  },
  md: {
    height: 10,
    minWidth: 32,
    fontSize: "md",
    px: 4,
  },
  sm: {
    height: 8,
    minWidth: 32,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    height: 6,
    minWidth: 10,
    fontSize: "xs",
    px: 2,
  },
};

const sizeProps = ({ size }) => sizes[size];

////////////////////////////////////////////////////////////

const disabledProps = {
  "&:disabled": {
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

////////////////////////////////////////////////////////////

const focusProps = {
  "&:focus": {
    boxShadow: "outline",
  },
};

////////////////////////////////////////////////////////////

const typeProps = props => {
  switch (props.type) {
    case "solid":
      return solidTypeProps(props);
    case "link":
      return linkTypeProps(props);
    case "outline":
      return outlineTypeProps(props);
    default:
      return {};
  }
};

////////////////////////////////////////////////////////////

const useButtonStyle = props => {
  const _props = { ...props, theme };
  const styles = {
    ...baseProps,
    ...sizeProps(_props),
    ...focusProps,
    ...typeProps(_props),
    width: _props.isFullWidth ? "full" : undefined,
  };
  return styles;
};

export default useButtonStyle;
