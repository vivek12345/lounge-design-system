import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import css from "@styled-system/css";
import { margin, space, layout, border, compose } from "styled-system";
import { Spinner } from "../Spinner";
import { Icon } from "../Icon";
import useButtonStyle from "./styles";

const Button = ({
  isDisabled = false,
  isLoading = false,
  isActive = false,
  isFullWidth = false,
  children,
  variant = "primary",
  leftIcon,
  rightIcon,
  type = "solid",
  loadingText,
  iconSpacing = 2,
  size = "md",
  ...rest
}) => {
  const buttonStyleProps = useButtonStyle({
    variant,
    type,
    size,
    isFullWidth,
  });
  const PseudoBox = styled("button")(
    css({
      ...buttonStyleProps,
    }),
    compose(
      border,
      layout,
      space,
      margin,
    ),
  );
  const _isDisabled = isLoading || isDisabled;
  return (
    <PseudoBox {...rest} disabled={_isDisabled}>
      {isLoading ? (
        <Spinner
          position={loadingText ? "relative" : "absolute"}
          mr={loadingText ? iconSpacing : 0}
          color="currentColor"
          size="sm"
        />
      ) : null}
      {isLoading ? (
        loadingText
      ) : (
        <>
          {leftIcon ? <Icon mr={iconSpacing} name={leftIcon} /> : null}
          {children}
          {rightIcon ? <Icon ml={iconSpacing} name={rightIcon} /> : null}
        </>
      )}
    </PseudoBox>
  );
};

Button.propTypes = {
  /**
   The color of the button needed
   */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
   The type of the button needed
   */
  type: PropTypes.oneOf(["solid", "outline", "link"]),
  /**
   Specify size
  */
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  /**
    specify if we want a full width button
  */
  isFullWidth: PropTypes.oneOf([true, false]),
  /**
    specify if it's disabled or not
   */
  isDisabled: PropTypes.oneOf([true, false]),
  /**
    A loader to show when button is in loading state,
  */
  isLoading: PropTypes.oneOf([true, false]),
  /**
    Text to show when button is in loading state
  */
  loadingText: PropTypes.string,
};

export default Button;
