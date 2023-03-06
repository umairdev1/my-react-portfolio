import React from "react";
import styled from "styled-components";
import { text } from "../../../constants/constants";
import TypeWriterEffect from "react-typewriter-effect";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="hero-section-data">
          <p className="hero-top-data">Hello, I'm</p>
          <h1 className="hero-heading">Umair Saleem</h1>
          <p className="hero-paragraph">{text.USERDESCRIPTION}</p>
          <div className="animated-text">
            <div className="static-txt">and</div>

            <div className="dynamic-txt">
              {
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Tilt Neon",
                    color: "#FF0055",
                    fontWeight: 700,
                    fontSize: "1.4em",
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
          <h3 className="find-me">Find me on</h3>
          <div className="grid grid-four-column">
            <div className="box github">{<FaGithub />}</div>
            <div className="box youtube">{<FaYoutube />}</div>
            <div className="box linkedIn">{<FaLinkedinIn />}</div>
            <div className="box instagram">{<BsInstagram />}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding: 9rem 0;
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
      font-size: 1.4em;
      padding-right: 3px;
      font-family: "Tilt Neon";
      font-weight: bold;
    }
  }
  .find-me {
    font-size: 1.6rem;
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
    text-transform: uppercase;
    font-size: 2.9rem;
    font-family: "Tilt Neon";
    font-weight: bold;
  }
  .hero-paragraph {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.gray};
    line-height: 1.8rem;
    word-spacing: 4px;
    font-family: "Montserrat";
  }

  picture {
    text-align: center;
  }
  .hero-img {
    max-width: 80%;
  }
`;
export default HeroSection;
