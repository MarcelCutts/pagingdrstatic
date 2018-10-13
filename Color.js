import React from "react";
import styled from "styled-components";

import Flex from "mdx-deck/dist/Flex";
import Box from "mdx-deck/dist/Box";

const Root = styled.div([], {
  background: "red"
});

const Color = ({ children, color }) => {
  return (
    <Flex
      css={{
        alignItems: "center",
        height: "100vh",
        background: color
      }}
    >
      <h1>{children}</h1>
    </Flex>
  );
};

export default Color;
