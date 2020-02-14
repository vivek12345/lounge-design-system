import React, { forwardRef } from "react";
import { Box } from "../Box";
import css from "@styled-system/css";

const styles = {
  display: "inline-block",
  boxSizing: "border-box",
  width: "100%",
  p: 2,
  appearance: "none",
  outline: "none",
  fontSize: "inherit",
  lineHeight: "inherit",
  border: "1px",
  borderColor: "gray.200",
  borderRadius: "md",
  color: "inherit",
  bg: "transparent",
  "&:focus": {
    borderColor: "blue.300",
    boxShadow: "md",
  },
};

const Input = forwardRef(
  ({ type = "text", name, id, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        as="input"
        type={type}
        name={name}
        id={id}
        {...props}
        css={css({
          ...styles,
        })}
      >
        {children}
      </Box>
    );
  },
);

export default Input;
