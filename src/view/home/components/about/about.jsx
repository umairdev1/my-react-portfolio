import React from "react";
import styled from "styled-components";

import { aboutSection } from "../../../../constants/constants";
import TextHeading from "../../../../res/TextHeading";

const AboutSection = () => {
  return (
    <Wrapper>
      <TextHeading title="About" />
      <div className="container grid grid-two-column">
        <div className="hero-section-image">
          <img
            className="section-image"
            src={aboutSection.image}
            alt="hero"
          ></img>
        </div>
        <div className="hero-section-data">
          <p className="hero-paragraph">{aboutSection.ABOUTFIRSTPARAGRAPH}</p>
          <p className="hero-paragraph">{aboutSection.ABOUTSECONDPARAGRAPH}</p>
          <p className="hero-paragraph">{aboutSection.ABOUTTHIRDPARAGRAPH}</p>
        </div>
      </div>
      <hr className="hr" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 3rem 1rem;
  .container {
    max-width: 1232px;
    margin: 0 auto;
    padding: 1rem 0;
  }
  .grid-two-column {
    display: flex;
  }

  .hero-section-image {
    max-width: 616px;
    display: flex;
    justify-content: center;
    align-items: center;
    .section-image {
      height: 320px;
      max-width: 320px;
    }
  }

  .hero-section-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 35px;
    font-weight: 400;
    font-family: "Tilt Neon";
    font-weight: bold;
  }
  .hero-paragraph {
    font-size: 15px;
    font-weight: 500;
    line-height: 1.8rem;
    word-spacing: 4px;
    font-family: "Montserrat";
  }

  @media screen and (max-width: 480px) {
    .hero-section-image {
      .section-image {
        height: 250px;
        max-width: 250px;
      }
    }
    .hero-top-data {
      font-size: 14px;
    }

    .hero-heading {
      font-size: 25px;
    }
    .hero-paragraph {
      font-size: 14px;
      word-spacing: 2px;
    }
  }
  @media screen and (max-width: 768px) {
    .grid-two-column {
      display: flex;
      flex-direction: column;
    }
  }
`;
export default AboutSection;
