import React from "react";
import PropTypes from "prop-types";
import useButtonStyle from "./styles";
import styled from "@emotion/styled";
import css from "@styled-system/css";

const Button = ({
  isDisabled,
  isLoading,
  isActive,
  isFullWidth,
  children,
  variantColor = "black",
  leftIcon,
  rightIcon,
  variant = "solid",
  loadingText,
  iconSpacing = 2,
  type = "button",
  size = "md",
  ...rest
}) => {
  const buttonStyleProps = useButtonStyle({
    color: variantColor,
    variant,
    size,
  });
  const PseudoBox = styled("button")(
    css({
      ...buttonStyleProps,
      ...rest,
    }),
  );
  return <PseudoBox>{children}</PseudoBox>;
};

Button.propTypes = {
  /**
   The color of the button needed
   */
  variantColor: PropTypes.oneOf(["blue", "black"]),
  /**
   The type of the button needed
   */
  variant: PropTypes.oneOf(["solid", "outline"]),
  /**
   Specify size
  */
  size: PropTypes.oneOf(["sm", "md", "lg"])
};


export default Button;
