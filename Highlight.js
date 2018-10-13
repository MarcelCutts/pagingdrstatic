import React from "react";
import styled from "styled-components";

const Highlight = styled.h1`
  color: blue;
`;

const Highilght = props =>
  console.log("✅", props) || <Highlight>{props.children}</Highlight>;

export default Highilght;
