/** @jsx jsx */
import PropTypes from "prop-types";
import { jsx } from "@emotion/core";
import { Children, cloneElement, isValidElement } from "react";
import { Box } from "../Box";

const ButtonGroup = ({ spacing = 2, my = 0, children }) => {
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return;

    const isLast = index === Children.count(children) - 1;

    return cloneElement(child, {
      size: child.props.size || "md",
      variant: child.props.variant || "primary",
      type: child.props.type || "solid",
      _focus: { boxShadow: "outline", zIndex: 1 },
      my: my,
      mr: spacing,
      ...(isLast && { mr: 0 }),
    });
  });

  return <Box display="inline-block">{clones}</Box>;
};

ButtonGroup.propTypes = {
  /**
   Specify the spacing between buttons
   */
  spacing: PropTypes.number,
};

export default ButtonGroup;
