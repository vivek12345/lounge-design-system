import * as React from "react";
import { Box, Heading } from "../components";
import { storiesOf } from "@storybook/react";

const headingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"];

storiesOf("Theme/typography", module).add("List", () => (
  <Box display="flex" flexDirection="column" p={6}>
    <Heading as={"h1"} mb="10">
      Typography
    </Heading>
    {headingTypes.map(headingType => {
      return (
        <Heading as={headingType} mb={4} key={headingType}>
          {headingType.toUpperCase()} Heading
        </Heading>
      );
    })}
  </Box>
));
