import React from "react";
import styled from "styled-components";
import Flex from "mdx-deck/dist/Flex";
import Box from "mdx-deck/dist/Box";

const Root = styled.div([], {
  width: "100vw",
  height: "100vh"
});

const SplitColor = ({ children, color }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children);

  return (
    <Root>
      <Flex
        css={{
          alignItems: "center",
          justifyContent: "center",
          height: "100%"
        }}
      >
        <Box
          width={1 / 3}
          style={{
            backgroundColor: color,
            height: "100%",
            display: "flex",
            alignItems: "center"
          }}
        >
          {a}
        </Box>
        <Box width={2 / 3}>{rest}</Box>
      </Flex>
    </Root>
  );
};

export const hoc = color => props => {
  const p = { ...props, color };
  return (
    <div>
      <SplitColor {...p} />
    </div>
  );
};
