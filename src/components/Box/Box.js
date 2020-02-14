import styled from "@emotion/styled";
import {
  background,
  border,
  color,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  typography,
  compose,
} from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  props => props.css,
  compose(
    background,
    border,
    color,
    flexbox,
    grid,
    layout,
    position,
    shadow,
    space,
    typography,
  ),
);

Box.displayName = "Box";

export default Box;
