import React, { useState, useEffect, forwardRef } from "react";
import { Box } from "../Box";
import { Flex } from "../Flex";
import { Image } from "../Image";
import { Icon } from "../Icon";
import { Link } from "../Link";
import useHeaderStyles from "./styles";

const Header = forwardRef(
  ({ title, logo, rightMenu, onBack, ...props }, ref) => {
    return (
      <Flex ref={ref} {...useHeaderStyles} {...props}>
        <Flex py="5" pl="6">
          {typeof window !== "undefine" && window && window.history.length ? (
            <Link
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                onBack && onBack();
              }}
              color="white"
              mr={4}
            >
              <Icon
                size={4}
                name="back"
                focusable="true"
                color="currentColor"
              />
            </Link>
          ) : null}
          {logo ? <Image src={logo} alt="logo" height={6} mr={4} /> : null}
          {title ? (
            <Box
              as="span"
              color="white"
              fontSize="lg"
              fontWeight="medium"
              lineHeight="shorter"
              borderLeft="1px"
              borderColor="white"
              px="4"
            >
              {title}
            </Box>
          ) : null}
        </Flex>
        {rightMenu ? (
          <>
            <Box mx="auto" />
            <Flex align="center" pr="6">
              {rightMenu}
            </Flex>
          </>
        ) : null}
      </Flex>
    );
  },
);

Header.displayName = "Header";

export default Header;
