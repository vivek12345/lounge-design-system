import React, { Children, cloneElement, isValidElement } from "react";
import { Flex } from "../Flex";

const Stack = ({ spacing = 3, children, ...rest }) => {
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return;

    const isLast = index === Children.count(children) - 1;

    return cloneElement(child, {
      mb: spacing,
      ...(isLast && { mb: 0 }),
    });
  });
  return (
    <Flex justify="left" align="left" wrap="wrap" direction="column" {...rest}>
      {clones}
    </Flex>
  );
};

export default Stack;
