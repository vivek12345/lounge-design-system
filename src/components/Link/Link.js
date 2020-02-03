import React, { forwardRef } from "react";
import { Box } from "../Box";

const baseStyleProps = {
  transition: `all 0.15s ease-out`,
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  "&:hover": {
    textDecoration: "none",
  },
  "&:focus": {
    boxShadow: "outline",
  },
  "&:disabled": {
    opacity: "0.4",
    cursor: "not-allowed",
    textDecoration: "none",
  },
};

const Link = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="a"
    css={baseStyleProps}
    fontSize={"md"}
    lineHeight={"base"}
    color={"gray.900"}
    {...props}
  />
));

export default Link;
