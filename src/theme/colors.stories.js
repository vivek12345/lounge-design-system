import * as React from "react";
import { storiesOf } from "@storybook/react";
import styled from "@emotion/styled";
import colors from "./colors";
import css from "@styled-system/css";

const Wrapper = styled("div")(
  css({
    p: 6,
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "gray.50",
    width: "100vw",
  }),
);

const Title = styled("div")(
  css({
    display: "flex",
    flexDirection: "column",
    color: "gray.800",
    fontWeight: "medium",
    width: "full",
    "> div": {
      px: "5",
      py: "3",
      borderBottom: "1px",
      borderColor: "gray.300",
    },
  }),
);

const Section = styled("div")(
  css({
    width: 40,
    float: "left",
    border: "1px",
    borderColor: "gray.300",
    borderRadius: "md",
    marginBottom: 5,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginRight: 5,
  }),
);

const ColorCode = styled("div")(
  css({
    color: "gray.500",
    fontSize: "3",
  }),
);

const primaryColors = [];
const colorShades = [];
Object.keys(colors).forEach(x => {
  const group = colors[x];
  if (typeof group === "object") {
    colorShades.push(x);
  } else {
    primaryColors.push(x);
  }
});

storiesOf("Theme/colors", module).add("List", () => (
  <Wrapper>
    <div>
      <h2 style={{ marginBottom: 40 }}>Primary Colors</h2>
      {primaryColors.map(x => {
        const group = colors[x];
        return (
          <Section key={group}>
            <div
              style={{
                backgroundColor: group,
                flex: 1,
                height: 100,
                borderBottom: `1px solid ${colors.gray["300"]}`,
              }}
            />
            <Title>
              <ColorCode>{group}</ColorCode>
              <div>{`${x}`}</div>
            </Title>
          </Section>
        );
      })}
    </div>
    <div>
      <h2 style={{ marginBottom: 40 }}>Color Shades</h2>
      {colorShades.map(x => {
        const group = colors[x];
        return (
          <div key={x}>
            <h4 style={{ marginBottom: 10 }}>{x}</h4>
            <div style={{ overflow: "auto" }}>
              {Object.keys(group).map(y => {
                const color = group[y];
                return (
                  <Section key={y}>
                    <div
                      style={{
                        backgroundColor: color,
                        flex: 1,
                        height: 100,
                        borderBottom: `1px solid ${colors.gray["300"]}`,
                      }}
                    />
                    <Title>
                      <ColorCode>{color.toUpperCase()}</ColorCode>
                      <div>{`${x}.${y}`}</div>
                    </Title>
                  </Section>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  </Wrapper>
));
