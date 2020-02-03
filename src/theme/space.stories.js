import * as React from "react";
import theme from "./theme";
import { Box, Heading } from "../components";
import { storiesOf } from "@storybook/react";

const { space } = theme;

storiesOf("Theme/spacing", module).add("List", () => (
  <Box display="flex" flexDirection="column" p={6}>
    <Heading as={"h1"} mb="10">
      Spacing Scale
    </Heading>
    {Object.keys(space).map(spaceKey => {
      const spaceGiven = space[spaceKey];
      return (
        <Box mb={4} key={spaceKey}>
          <Box display="inline-block">{spaceGiven}</Box>
          <Box width={"md"} height={spaceKey} bg="red.50" />
        </Box>
      );
    })}
  </Box>
));
