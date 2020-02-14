import React, { forwardRef } from "react";
import { Icon } from "../Icon";
import { Box } from "../Box";
import css from "@styled-system/css";

const RadioChecked = props => <Icon size={6} name="radioChecked" {...props} />;

const RadioUnchecked = props => (
  <Icon size={6} name="radioUnChecked" {...props} />
);

const RadioIcon = props => (
  <>
    <RadioChecked
      {...props}
      display="none"
      css={css({
        "input:checked ~ &": {
          display: "block",
        },
      })}
    />
    <RadioUnchecked
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

const Radio = forwardRef(({ className, ...props }, ref) => (
  <Box>
    <Box
      ref={ref}
      as="input"
      type="radio"
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
      as={RadioIcon}
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

export default Radio;
