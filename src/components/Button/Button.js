import React from "react";
import useButtonStyle from "./styles";
import styled from "@emotion/styled";
import css from "@styled-system/css";

const Button = ({
  isDisabled,
  isLoading,
  isActive,
  isFullWidth,
  children,
  variantColor = "gray",
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

export default Button;
