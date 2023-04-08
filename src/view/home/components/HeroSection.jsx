import React from "react";
import styled from "styled-components";
import { heroSection } from "../../../constants/constants";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeroSection = () => {
  const openLink = (url) => {
    window.open(url);
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <p className="hero-top-data">Hello, I'm</p>
          <h1 className="hero-heading">Umair Saleem</h1>
          <div className="animated-text">
            <div className="static-txt">and</div>

            <div className="dynamic-txt">
              {
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Tilt Neon",
                    color: "#FF0055",
                    fontWeight: 700,
                    fontSize: "18px",
                  }}
                  cursorColor="#FF0055"
                  multiText={["Software Engineer.", "Full-Stack Developer."]}
                  multiTextDelay={1000}
                  typeSpeed={100}
                  multiTextLoop
                />
              }
            </div>
          </div>
          <p className="hero-paragraph">{heroSection.USERDESCRIPTION}</p>

          <h3 className="find-me">Find me on</h3>
          <div className="grid grid-four-column">
            <div
              className="box github"
              onClick={() => openLink("https://github.com/umairdev1")}
            >
              {<FaGithub />}
            </div>
            <div
              className="box youtube"
              onClick={() => openLink("https://www.youtube.com/@umairdev")}
            >
              {<FaYoutube />}
            </div>
            <div
              className="box linkedIn"
              onClick={() => openLink("https://www.linkedin.com/in/umair-dev")}
            >
              {<FaLinkedinIn />}
            </div>
            <div
              className="box instagram"
              onClick={() =>
                openLink("https://www.instagram.com/umairdev_com/")
              }
            >
              {<BsInstagram />}
            </div>
          </div>
        </div>
        <div className="hero-section-image">
          <img
            className="section-image"
            src={heroSection.image}
            alt="hero"
          ></img>
        </div>
      </div>
      <hr className="hr" />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .container {
    max-width: 1232px;
    margin: 0 auto;
    padding: 5rem 1rem;
  }
  .grid-two-column {
    display: flex;
  }

  .hero-section-image {
    display: flex;
    justify-content: center;
    align-items: center;
    .section-image {
      height: 320px;
      max-width: 320px;
      border-radius: 50%;
      border: 15px solid ${({ theme }) => theme.colors.white};
      box-shadow: 0px 0px 10px rgba(170, 169, 169, 0.5);
    }
  }
  .youtube {
    &:hover {
      color: red;
    }
  }
  .linkedIn {
    &:hover {
      color: #197ce6;
    }
  }
  .instagram {
    &:hover {
      color: #e15610;
    }
  }
  .github {
    &:hover {
      color: #6187bd;
    }
  }
  .animated-text {
    display: flex;

    align-items: center;
    .static-txt {
      font-size: 18px;
      padding-right: 3px;
      font-family: "Tilt Neon";
      font-weight: bold;
    }
  }
  .find-me {
    font-size: 16px;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 500;
  }
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 7px;
    box-shadow: 0 3px 2px rgb(0 0 0 / 2%), 0 2px 2px rgb(0 0 0 / 13%);
    cursor: pointer;
    transition: 0.3s ease-out;
    height: 3rem;
    width: 3rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 1rem;
    margin-right: 2px;

    &:hover,
    &:active {
      background-color: ${({ theme }) => theme.colors.helper};
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
    font-size: 38px;
    font-weight: 400;
    font-family: "Tilt Neon";
    font-weight: bold;
  }
  .hero-paragraph {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.8rem;
    word-spacing: 1px;
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
      flex-direction: column-reverse;
    }
  }
`;
export default HeroSection;
