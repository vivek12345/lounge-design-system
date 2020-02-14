import React, { forwardRef } from "react";
import { Icon } from "../Icon";
import { Box } from "../Box";
import css from "@styled-system/css";

const CheckboxChecked = props => (
  <Icon size={6} name="checkboxChecked" {...props} />
);

const CheckboxUnchecked = props => (
  <Icon size={6} name="checkboxUnChecked" {...props} />
);

const CheckboxIcon = props => (
  <>
    <CheckboxChecked
      {...props}
      display="none"
      css={css({
        "input:checked ~ &": {
          display: "block",
        },
      })}
    />
    <CheckboxUnchecked
      {...props}
      display="block"
      css={css({
        "input:checked ~ &": {
          display: "none",
        },
      })}
    />
  </>
);

const CheckBox = forwardRef(({ className, ...props }, ref) => (
  <Box>
    <Box
      ref={ref}
      as="input"
      type="checkbox"
      {...props}
      css={css({
        position: "absolute",
        opacity: "0",
        zIndex: "hide",
        width: "1px",
        height: "1px",
        overflow: "hidden",
      })}
    />
    <Box
      as={CheckboxIcon}
      aria-hidden="true"
      className={className}
      css={css({
        mr: 2,
        borderRadius: "full",
        color: "gray.400",
        "input:checked ~ &": {
          color: "primary",
        },
      })}
    />
  </Box>
));

export default CheckBox;
