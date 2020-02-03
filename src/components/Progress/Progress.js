import React, { forwardRef } from "react";
import { Box } from "../Box";

const styles = {
  success: {
    bg: "green.200",
  },
  info: {
    bg: "blue.200",
  },
  error: {
    bg: "red.200",
  },
  warning: {
    bg: "yellow.200",
  },
};
const Progress = forwardRef(({ variant = "info", value, ...rest }, ref) => {
  return (
    <Box
      ref={ref}
      position="relative"
      display="inline-block"
      bg="gray.400"
      height={2}
      {...rest}
      width="full"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        {...styles[variant]}
        width={`${value}%`}
        height={2}
      ></Box>
    </Box>
  );
});

export default Progress;
