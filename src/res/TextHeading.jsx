import React from "react";
import styled from "styled-components";

const TextHeading = ({ title }) => {
  return <Wrapper>{title}</Wrapper>;
};
const Wrapper = styled.div`
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  font-family: "Tilt Neon";
  color: ${({ theme }) => theme.colors.primary};
`;
export default TextHeading;
