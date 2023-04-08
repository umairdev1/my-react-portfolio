import React, { useRef, useState } from "react";
import styled from "styled-components";
import AboutSection from "./components/about/about";
import HeroSection from "./components/HeroSection";
import SkillsSection from "./components/skills/skills";
import ExperienceSection from "./components/experience/experienceSection";
import PortfolioSection from "./components/portfolio/portfolioSection";
import ContactSection from "./components/contact/contactSection";
import Footer from "./components/Footer";
import { Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const [activeButton, setActiveButton] = useState("Home");
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleClick = (ref, title) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setActiveButton(title);
  };

  return (
    <div>
      <Drawer title="UmairDev" placement="right" onClose={onClose} open={open}>
        <DrawerNav>
          <p
            className={`nav-title ${activeButton === "Home" ? "active" : ""}`}
            onClick={() => handleClick(homeRef, "Home")}
          >
            Home
          </p>
          <p
            className={`nav-title ${activeButton === "About" ? "active" : ""}`}
            onClick={() => handleClick(aboutRef, "About")}
          >
            About
          </p>
          <p
            className={`nav-title ${activeButton === "Skills" ? "active" : ""}`}
            onClick={() => handleClick(skillsRef, "Skills")}
          >
            Skills
          </p>
          <p
            className={`nav-title ${
              activeButton === "Experience" ? "active" : ""
            }`}
            onClick={() => handleClick(experienceRef, "Experience")}
          >
            Experience
          </p>
          <p
            className={`nav-title ${
              activeButton === "Portfolio" ? "active" : ""
            }`}
            onClick={() => handleClick(portfolioRef, "Portfolio")}
          >
            Portfolio
          </p>
          <p
            className={`nav-title ${
              activeButton === "Contact" ? "active" : ""
            }`}
            onClick={() => handleClick(contactRef, "Contact")}
          >
            Contact
          </p>
        </DrawerNav>
      </Drawer>
      <MainContainer>
        {/* header Code */}

        <div className="container">
          <section className="menu">
            <div className="humburger">
              <MenuOutlined onClick={showDrawer} />
            </div>
            <div className="logo" onClick={() => handleClick(homeRef)}>
              UmairDev
            </div>
          </section>

          <MainNav>
            <p
              className={`nav-title ${activeButton === "Home" ? "active" : ""}`}
              onClick={() => handleClick(homeRef, "Home")}
            >
              Home
            </p>
            <p
              className={`nav-title ${
                activeButton === "About" ? "active" : ""
              }`}
              onClick={() => handleClick(aboutRef, "About")}
            >
              About
            </p>
            <p
              className={`nav-title ${
                activeButton === "Skills" ? "active" : ""
              }`}
              onClick={() => handleClick(skillsRef, "Skills")}
            >
              Skills
            </p>
            <p
              className={`nav-title ${
                activeButton === "Experience" ? "active" : ""
              }`}
              onClick={() => handleClick(experienceRef, "Experience")}
            >
              Experience
            </p>
            <p
              className={`nav-title ${
                activeButton === "Portfolio" ? "active" : ""
              }`}
              onClick={() => handleClick(portfolioRef, "Portfolio")}
            >
              Portfolio
            </p>
            <p
              className={`nav-title ${
                activeButton === "Contact" ? "active" : ""
              }`}
              onClick={() => handleClick(contactRef, "Contact")}
            >
              Contact
            </p>
          </MainNav>
          <div className="cv-container">
            <p>CV Download</p>
          </div>
        </div>
      </MainContainer>
      {/* other sections */}
      <div ref={homeRef}>
        <HeroSection />
      </div>
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      <div ref={experienceRef}>
        <ExperienceSection />
      </div>
      <div ref={portfolioRef}>
        <PortfolioSection />
      </div>
      <div ref={contactRef}>
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  .nav-title {
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    justify-items: center;
    align-items: center;
    padding: 0px 10px;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      text-decoration: underline;
    }
    &.active {
      // add this block to style the active navigation item
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const DrawerNav = styled.nav`
  display: flex;
  flex-direction: column;
  .nav-title {
    font-weight: 500;
    font-size: 14px;
    text-transform: capitalize;
    justify-items: center;
    align-items: center;
    padding: 0px 10px;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
      text-decoration: underline;
    }
    &.active {
      // add this block to style the active navigation item
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
`;
const MainContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 10px 0px;
  padding-bottom: 0px;
  position: sticky;
  top: 0;
  z-index: 999;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1232px;
    margin: 0 auto;
    .menu {
      padding-bottom: 15px;
      display: flex;
      .humburger {
        @media screen and (min-width: 786px) {
          display: none;
        }
      }
      .logo {
        margin: 0;
        margin-left: 10px;
        font-weight: 600;
        font-size: 20px;
        padding: 0;
        font-family: "Tilt Neon";
        font-weight: bold;
        &:hover {
          color: ${({ theme }) => theme.colors.primary};
          cursor: pointer;
        }
      }
    }

    .nav-container {
      display: flex;
      align-items: center;
    }

    .cv-container p {
      display: flex;
      align-items: center;
      padding: 5px 1.2rem;
      height: 35px;
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.gradient};
      border-radius: 50px;
      font-size: 13px;
      cursor: pointer;
    }

    .menu-icon {
      display: none;
      font-size: 1.5rem;
      cursor: pointer;
    }

    @media screen and (max-width: 786px) {
      .nav-container {
        display: none;
      }

      .menu-icon {
        display: block;
      }
    }
  }
`;
export default Home;
