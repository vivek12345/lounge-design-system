import React, { forwardRef } from "react";
import Container from "./Container";
import { Box } from "../Box";
import { Grid } from "../Grid";

const Layout = forwardRef(({ children, ...props }, ref) => {
  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
});

const Header = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        "grid-column-start": 0,
        "grid-column-end": "span 12",
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

const Sidebar = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        "grid-column-end": "span 3",
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

const Main = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        "grid-column-end": "span 9",
      }}
      {...props}
    >
      {children}
    </Box>
  );
});
const Footer = forwardRef(({ children, ...props }, ref) => {
  return (
    <Box
      ref={ref}
      css={{
        "grid-column-start": 0,
        "grid-column-end": "span 12",
      }}
      {...props}
    >
      {children}
    </Box>
  );
});

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Main = Main;
Layout.Sidebar = Sidebar;

Layout.displayName = "Layout";

export default Layout;
