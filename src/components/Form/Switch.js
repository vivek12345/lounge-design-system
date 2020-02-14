import React, { useState, forwardRef } from "react";
import { Box } from "../Box";
import css from "@styled-system/css";

const Switch = forwardRef(({ checked = false, onClick, ...props }, ref) => {
  const [isChecked, toggle] = useState(checked);
  return (
    <Box
      ref={ref}
      as="button"
      type="button"
      role="switch"
      data-action="aria-switch"
      aria-checked={isChecked}
      onClick={() => {
        toggle(!isChecked);
        onClick && onClick(!isChecked);
      }}
      {...props}
      css={css({
        appearance: "none",
        m: 0,
        mr: 2,
        p: 0,
        width: 10,
        height: 6,
        color: "primary",
        bg: "transparent",
        border: "1px",
        borderColor: "primary",
        borderRadius: "full",
        "&[aria-checked=true]": {
          bg: "primary",
        },
        ":focus": {
          outline: "none",
          boxShadow: "0 0 0 2px",
        },
      })}
    >
      <Box
        aria-hidden
        style={{
          transform: isChecked ? "translateX(16px)" : "translateX(0)",
        }}
        css={css({
          mt: "-1px",
          ml: "-1px",
          width: 6,
          height: 6,
          borderRadius: "full",
          border: "1px",
          borderColor: "primary",
          bg: "white",
          transitionProperty: "transform",
          transitionTimingFunction: "ease-out",
          transitionDuration: "0.1s",
        })}
      />
    </Box>
  );
});

export default Switch;
