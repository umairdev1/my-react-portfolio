import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <MainContainer>
      <div className="container">
        <p className="logo">UmairDev</p>
        <MainNav>
          <p className="nav-title">Home</p>
          <p className="nav-title">About</p>
          <p className="nav-title">Skills</p>
          <p className="nav-title">Experience</p>
          <p className="nav-title">Portfolio</p>
          <p className="nav-title">Contact</p>
        </MainNav>
        <div className="cv-container">
          <p>CV Download</p>
        </div>
      </div>
    </MainContainer>
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
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const MainContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 10px 0px;
  padding-bottom: 0px;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1232px;
    margin: 0 auto;
    .logo {
      font-weight: 600;
      font-size: 20px;
      line-height: 1.35;
      font-family: "Tilt Neon";
      font-weight: bold;
      &:hover {
        color: ${({ theme }) => theme.colors.primary};
        cursor: pointer;
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

    @media screen and (max-width: 480px) {
      .cv-container p {
        padding: 5px 1rem;
        height: 35px;
        font-size: 12px;
        cursor: pointer;
      }
      .logo {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
`;

export default Header;
