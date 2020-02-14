import React, { forwardRef } from "react";
import { Box } from "../Box";

const styles = ({ isRound }) => {
  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "capitalize",
    borderRadius: isRound ? "full" : "sm",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    fontSize: "sm",
    py: 1,
    px: 3,
  };
};

const variantStyles = ({ variant }) => {
  const styles = {
    success: {
      bg: "green.50",
      color: "green.500",
    },
    info: {
      bg: "blue.50",
      color: "blue.500",
    },
    error: {
      bg: "red.50",
      color: "red.500",
    },
    warning: {
      bg: "yellow.50",
      color: "yellow.500",
    },
  };
  return styles[variant];
};

const Badge = forwardRef(
  ({ variant = "info", isRound, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...styles({ isRound })}
        {...variantStyles({ variant })}
        {...props}
      >
        {children}
      </Box>
    );
  },
);

Badge.displayName = "Badge";

export default Badge;
