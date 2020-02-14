import React, { forwardRef } from "react";
import { Flex } from "../Flex";
import css from "@styled-system/css";

const styles = css({
  boxSizing: "border-box",
  minWidth: "0px",
  width: "inherit",
  fontSize: "md",
  m: 0,
});

const Label = forwardRef(({ htmlFor, children, ...props }, ref) => (
  <Flex
    ref={ref}
    as="label"
    align="center"
    htmlFor={htmlFor}
    css={styles}
    {...props}
  >
    {children}
  </Flex>
));

export default Label;
