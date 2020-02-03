/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core";
import { forwardRef } from "react";
import { Box } from "../Box";
import PropTypes from "prop-types";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const sizes = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.5rem",
  lg: "2rem",
  xl: "3rem",
};

const Spinner = forwardRef(
  (
    {
      size = "md",
      thickness = "2px",
      speed = "0.45s",
      color,
      emptyColor = "transparent",
      ...props
    },
    ref,
  ) => {
    const _size = sizes[size] || size;

    return (
      <Box
        ref={ref}
        display="inline-block"
        borderWidth={thickness}
        borderColor="currentColor"
        borderBottomColor={emptyColor}
        borderLeftColor={emptyColor}
        borderStyle="solid"
        borderRadius="full"
        color={color}
        size={_size}
        css={css`
          animation: ${spin} ${speed} linear infinite;
        `}
        {...props}
      ></Box>
    );
  },
);

Spinner.displayName = "Spinner";

Spinner.propTypes = {
  /**
     Size of the spinner
     */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Spinner;
