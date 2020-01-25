import { theme } from "../../theme";
////////////////////////////////////////////////////////////

const solidVariantProps = ({ color, colorMode = "light" }) => {
  let style = {
    light: {
      bg: `${color}`,
      color: "white",
      _hover: {
        bg: `${color}.600`,
      },
      _active: {
        bg: `${color}.700`,
      },
    },
  };

  return style[colorMode];
};
////////////////////////////////////////////////////////////

const linkVariantProps = ({ color, colorMode = "light" }) => {
  const _color = { light: `${color}.500`, dark: `${color}.200` };
  const _activeColor = { light: `${color}.700`, dark: `${color}.500` };
  return {
    p: 0,
    height: "auto",
    lineHeight: "normal",
    color: _color[colorMode],
    _hover: {
      textDecoration: "underline",
    },
    _active: {
      color: _activeColor[colorMode],
    },
  };
};

////////////////////////////////////////////////////////////

const outlineVariantProps = props => {
  const { color, colorMode = "light" } = props;
  const borderColor = { light: "black", dark: "whiteAlpha.300" };

  return {
    border: "1px",
    borderColor: color === "black" ? borderColor[colorMode] : "current",
    color: `${color}`,
    bg: "transparent",
    _hover: {
      bg: `${color}.50`,
    },
    _active: {
      bg: `${color}.100`,
    },
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
  fontWeight: "bold",
};

////////////////////////////////////////////////////////////

const sizes = {
  lg: {
    height: 12,
    minWidth: 12,
    fontSize: "lg",
    px: 6,
  },
  md: {
    height: 10,
    minWidth: 10,
    fontSize: "md",
    px: 4,
  },
  sm: {
    height: 8,
    minWidth: 8,
    fontSize: "sm",
    px: 3,
  },
  xs: {
    height: 6,
    minWidth: 6,
    fontSize: "xs",
    px: 2,
  },
};

const sizeProps = ({ size }) => sizes[size];

////////////////////////////////////////////////////////////

const disabledProps = {
  _disabled: {
    opacity: "40%",
    cursor: "not-allowed",
    boxShadow: "none",
  },
};

////////////////////////////////////////////////////////////

const focusProps = {
  _focus: {
    boxShadow: "outline",
  },
};

////////////////////////////////////////////////////////////

const variantProps = props => {
  switch (props.variant) {
    case "solid":
      return solidVariantProps(props);
    case "link":
      return linkVariantProps(props);
    case "outline":
      return outlineVariantProps(props);
    default:
      return {};
  }
};

////////////////////////////////////////////////////////////

const useButtonStyle = props => {
  const _props = { ...props, theme };
  return {
    ...baseProps,
    ...sizeProps(_props),
    ...focusProps,
    ...disabledProps,
    ...variantProps(_props),
  };
};

export default useButtonStyle;
