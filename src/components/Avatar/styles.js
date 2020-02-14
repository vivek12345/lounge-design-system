////////////////////////////////////////////////////////////

const baseProps = {
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "uppercase",
  lineHeight: "tallest",
  borderRadius: "full",
  overflow: "hidden",
  color: "white",
};

////////////////////////////////////////////////////////////

const sizes = {
  lg: {
    height: 12,
    width: 12,
  },
  md: {
    height: 10,
    width: 10,
  },
  sm: {
    height: 8,
    width: 8,
  },
  xs: {
    height: 6,
    width: 6,
  },
};

const sizeProps = ({ size }) => sizes[size];

////////////////////////////////////////////////////////////

const useAvatarStyle = ({ size, username }) => {
  const styles = {
    ...baseProps,
    ...sizeProps({ size }),
    bg: username ? "green.300" : "gray.200",
  };
  return styles;
};

export default useAvatarStyle;
