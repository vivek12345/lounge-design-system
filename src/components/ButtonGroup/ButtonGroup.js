/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Children, cloneElement, isValidElement } from "react";
import { Box } from "../Box";

const ButtonGroup = ({ spacing = 2, children }) => {
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return;

    const isLast = index === Children.count(children) - 1;

    return cloneElement(child, {
      size: child.props.size || "md",
      variantColor: child.props.variantColor || "blue",
      variant: child.props.variant || "solid",
      _focus: { boxShadow: "outline", zIndex: 1 },

      ...(!isLast && { mr: spacing }),
    });
  });

  return <Box display="inline-block">{clones}</Box>;
};

export default ButtonGroup;
