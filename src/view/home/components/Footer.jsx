import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  background-color: white;
  height: 50px;
  text-align: center;
  line-height: 50px;
`;

const FooterText = styled.p`
  font-size: 16px;
  font-family: "Tilt Neon";
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2023 All rights reserved. UmairDev.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
