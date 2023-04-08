import React from "react";
import styled from "styled-components";
import TextHeading from "../../../../res/TextHeading";
import { Card, Col, Row, Avatar } from "antd";
import { experienceConst } from "../../../../constants/constants";
import Meta from "antd/es/card/Meta";

const ExperienceSection = () => {
  return (
    <>
      <TextHeading title="Experience" />
      <Container>
        {experienceConst.map((item) => (
          <CardWrapper key={item.id}>
            <Card title={item.job}>
              <Meta
                avatar={<StyledAvatar src={item.image} />}
                title={<Title>{item.name}</Title>}
                description={item.duration}
                style={{ display: "flex", alignItems: "center" }}
              />
              <Content>
                <p>{item.desc}</p>
                <ul>
                  <li>{item.res1}</li>
                  <li>{item.res2}</li>
                  <li>{item.res3}</li>
                </ul>
              </Content>
            </Card>
          </CardWrapper>
        ))}
      </Container>
      <hr />
    </>
  );
};

export default ExperienceSection;

const Container = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;

  @media (min-width: 1000px) {
    max-width: 1232px;
    justify-content: space-between;
    margin: 2rem auto;
  }
`;

const CardWrapper = styled(Col)`
  width: 100%;
  max-width: 1232px;
  margin-bottom: 2rem;
  padding: 0 10px;
  .ant-card-head-title {
    font-family: "Tilt Neon";
  }
  @media (min-width: 1000px) {
    width: 50%;
  }
`;

const Title = styled.div`
  font-size: 21px;
  font-family: "Tilt Neon";
  @media (max-width: 400px) {
    && {
      font-size: 19px;
    }
  }
`;

const Content = styled.div`
  margin: 1rem 0;
`;

const StyledAvatar = styled(Avatar)`
  && {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 520px) {
    && {
      width: 80px;
      height: 80px;
    }
  }
`;
