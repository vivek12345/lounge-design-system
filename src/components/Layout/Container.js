import React, { forwardRef } from "react";
import { Grid } from "../Grid";

const Container = forwardRef(({ children, ...props }, ref) => (
  <Grid
    ref={ref}
    gap={6}
    templateColumns={"repeat(12, 1fr)"}
    templateRows="auto"
    maxWidth="1280px"
    mx="auto"
    {...props}
  >
    {children}
  </Grid>
));

Container.displayName = "Container";

export default Container;
