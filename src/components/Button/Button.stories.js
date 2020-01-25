import { withKnobs } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import React from "react";
import { Box } from "../Box";
import { ButtonGroup } from "../ButtonGroup";
import { Button } from ".";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);
stories.addDecorator(story => {
  return (
    <Box maxWidth="xl" mx="auto" mt={6} p={6}>
      {story()}
    </Box>
  );
});

stories.add("variants", () => (
  <ButtonGroup spacing="24px">
    <Button variantColor="blue" variant="solid">
      Button
    </Button>
    <Button variantColor="blue" variant="outline">
      Button
    </Button>
    <Button variantColor="black" variant="solid">
      Button
    </Button>
    <Button variantColor="black" variant="outline">
      Button
    </Button>
  </ButtonGroup>
));

stories.add("sizes", () => (
  <ButtonGroup>
    <Button variantColor="blue" size="sm">
      Button
    </Button>
    <Button variantColor="blue" size="md">
      Button
    </Button>
    <Button variantColor="blue" size="lg">
      Button
    </Button>
  </ButtonGroup>
));
