import React from "react";
import styled from "styled-components";
import Flex from "mdx-deck/dist/Flex";
import Box from "mdx-deck/dist/Box";

const Root = styled.div([], {
  width: "100vw",
  height: "100vh"
});

const SplitThird = ({ children }) => {
  const [a, ...rest] = React.Children.toArray(children.props.children);

  return (
    <Root>
      <Flex
        css={{
          alignItems: "center",
          height: "100%"
        }}
      >
        <Box width={1 / 3}>{a}</Box>
        <Box width={2 / 3}>{rest}</Box>
      </Flex>
    </Root>
  );
};

export default SplitThird;
