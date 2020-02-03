import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon";
import { Button } from "../Button";

const IconButton = forwardRef(
  (
    {
      icon,
      variant = "primary",
      type = "solid",
      isLoading = false,
      isDisabled = false,
      isRound = false,
      "aria-label": ariaLabel,
      ...rest
    },
    ref,
  ) => {
    // Remove some props before passing it to IconButton
    const {
      isFullWidth,
      size,
      leftIcon,
      rightIcon,
      loadingText,
      ...props
    } = rest;

    return (
      <Button
        variant={variant}
        type={type}
        isLoading={isLoading}
        isDisabled={isDisabled}
        p="0"
        borderRadius={isRound ? "full" : "md"}
        ref={ref}
        size="xs"
        aria-label={ariaLabel}
        width={10}
        height={10}
        {...props}
      >
        <Icon name={icon} focusable="false" color="currentColor" aria-hidden />
      </Button>
    );
  },
);

IconButton.displayName = "IconButton";

IconButton.propTypes = {
  /**
     Name of the icon to display
     */
  icon: PropTypes.string.isRequired,
  /**
     The color of the button needed
     */
  variant: PropTypes.oneOf(["primary", "secondary"]),
  /**
     The type of the button needed
     */
  type: PropTypes.oneOf(["solid", "outline", "link"]),
  /**
      specify if it's disabled or not
     */
  isDisabled: PropTypes.oneOf([true, false]),
  /**
      A loader to show when button is in loading state,
    */
  isLoading: PropTypes.oneOf([true, false]),
  /**
      Icon button full rounded or square
    */
  isRound: PropTypes.oneOf([true, false]),
};

export default IconButton;
