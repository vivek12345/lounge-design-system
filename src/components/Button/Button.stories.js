import { withKnobs } from "@storybook/addon-knobs";
import React from "react";
import { Box } from "../Box";
import { ButtonGroup } from "../ButtonGroup";
import Button from "./Button";

export default {
  component: Button,
  title: "Button",
  decorators: [
    withKnobs,
    story => {
      return (
        <Box maxWidth="xl" mx="auto" mt={6} p={6}>
          {story()}
        </Box>
      );
    },
  ],
};

export const variants = () => (
  <ButtonGroup spacing={4}>
    <Button variant="primary" type="solid">
      Button
    </Button>
    <Button variant="primary" type="outline">
      Button
    </Button>
    <Button variant="secondary" type="solid">
      Button
    </Button>
    <Button variant="secondary" type="outline">
      Button
    </Button>
  </ButtonGroup>
);

export const sizes = () => (
  <ButtonGroup spacing={6}>
    <Button variant="primary" size="sm">
      Button
    </Button>
    <Button variant="primary" size="md">
      Button
    </Button>
    <Button variant="primary" size="lg">
      Button
    </Button>
  </ButtonGroup>
);
