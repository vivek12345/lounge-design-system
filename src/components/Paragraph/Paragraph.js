import React from "react";
import { Box } from "../Box";

const baseStyles = {
  lineHeight: "base",
  color: "gray.800",
  fontSize: "md",
  fontWeight: "normal",
};

const Paragraph = ({ children, ...props }) => {
  return (
    <Box as="p" {...baseStyles} {...props}>
      {children}
    </Box>
  );
};

export default Paragraph;
