import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Box } from "../Box";
import { ButtonGroup } from "../ButtonGroup";
import Button from "./Button";

export default {
  component: Button,
  title: 'Button',
  decorators: [withKnobs, story => {
    return (
      <Box maxWidth="xl" mx="auto" mt={6} p={6}>
        {story()}
      </Box>
    );
  }]
};

export const variants = () => (
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
);

export const sizes = () => (
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
);

