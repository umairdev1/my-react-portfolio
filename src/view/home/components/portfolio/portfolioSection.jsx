import React from "react";
import styled from "styled-components";
import TextHeading from "../../../../res/TextHeading";
import { Card, Col, Row } from "antd";
import { portfolioConst } from "../../../../constants/constants";

const PortfolioSection = () => {
  const handleCardClick = (url) => {
    window.open(url);
  };

  return (
    <>
      <Container>
        <TextHeading title="Portfolio" />
        <CardRow gutter={[24, 24]}>
          {portfolioConst.map((item) => (
            <CardCol key={item.id}>
              <PortfolioCard onClick={() => handleCardClick(item.url)}>
                <ImageWrapper>
                  <Image alt={item.name} src={item.image} />
                </ImageWrapper>
                <Name>{item.name}</Name>
              </PortfolioCard>
            </CardCol>
          ))}
        </CardRow>

        <Separator />
      </Container>
      <hr />
    </>
  );
};

export default PortfolioSection;

const Container = styled.div`
  max-width: 1232px;
  margin: 0 auto;
  padding: 2rem 10px;
`;

const CardRow = styled(Row)`
  margin-top: 2rem;
  justify-content: center;
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
  padding: 16px;
  text-align: center;

  &:hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

const Name = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  color: #333333;
  font-size: 16px;
  font-weight: 500;
  margin-top: 16px;
  padding: 8px;
`;

const Separator = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea;
`;
