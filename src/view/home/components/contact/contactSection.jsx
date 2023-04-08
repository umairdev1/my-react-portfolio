import React from "react";
import styled from "styled-components";
import TextHeading from "../../../../res/TextHeading";
import { Card, Col, Row } from "antd";
import {
  AiOutlineSkype,
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const ContactSection = () => {
  const handleCardClick = (url) => {
    window.open(url);
  };

  return (
    <>
      <Container>
        <TextHeading title="Contact" />
        <CardRow gutter={[24, 24]}>
          <CardCol key="1">
            <PortfolioCard
              onClick={() => handleCardClick("mailto:umairdev4@gmail.com")}
            >
              <IconWrapper>
                <AiOutlineMail />
              </IconWrapper>
              <Name>Email</Name>
            </PortfolioCard>
          </CardCol>
          <CardCol key="2">
            <PortfolioCard
              onClick={() =>
                handleCardClick("https://www.linkedin.com/in/umair-dev/")
              }
            >
              <IconWrapper>
                <AiOutlineLinkedin />
              </IconWrapper>
              <Name>LinkedIn</Name>
            </PortfolioCard>
          </CardCol>
          <CardCol key="3">
            <PortfolioCard
              onClick={() =>
                handleCardClick("https://join.skype.com/invite/vhDf5l7JTlzk")
              }
            >
              <IconWrapper>
                <AiOutlineSkype />
              </IconWrapper>
              <Name>Skype</Name>
            </PortfolioCard>
          </CardCol>
          <CardCol key="4">
            <PortfolioCard
              onClick={() =>
                handleCardClick(
                  "https://api.whatsapp.com/send/?phone=%2B923080820003&text&type=phone_number&app_absent=0"
                )
              }
            >
              <IconWrapper>
                <AiOutlineWhatsApp />
              </IconWrapper>
              <Name>Whatsapp</Name>
            </PortfolioCard>
          </CardCol>
        </CardRow>
      </Container>
    </>
  );
};

export default ContactSection;

const Container = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: 2rem 10px;
`;

const CardRow = styled(Row)`
  margin-top: 2rem;
  justify-content: center;
  margin-bottom: 4rem;
`;

const CardCol = styled(Col)`
  @media (max-width: 1000px) {
    span: 12;
  }
`;

const PortfolioCard = styled(Card)`
  border: none;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;
  padding: 0; // remove default padding
  text-align: center;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const IconWrapper = styled.div`
  width: 180px;
  height: 100px;
  font-size: 50px;
  margin-bottom: 8px;
`;
const Name = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  padding: 8px;
`;
