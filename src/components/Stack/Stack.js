import React, { Children, cloneElement, isValidElement } from "react";
import { Flex } from "../Flex";

const types = {
  VERTICAL: "VERTICAL",
  HORIZONTAL: "HORIZONTAL",
};

const flexDirection = {
  VERTICAL: "column",
  HORIZONTAL: "row",
};

const Stack = ({ spacing = 3, type = types.VERTICAL, children, ...rest }) => {
  const clones = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return;

    const isLast = index === Children.count(children) - 1;

    if (type === types.VERTICAL) {
      return cloneElement(child, {
        mb: spacing,
        ...(isLast && { mb: 0 }),
      });
    } else {
      return cloneElement(child, {
        mr: spacing,
        ...(isLast && { mr: 0 }),
      });
    }
  });
  return (
    <Flex
      justify="left"
      align="left"
      wrap="wrap"
      direction={flexDirection[type]}
      {...rest}
    >
      {clones}
    </Flex>
  );
};

export default Stack;
