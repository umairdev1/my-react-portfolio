import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <MainContainer>
      <div className="container">
        <p className="logo">UmairDev</p>
        <NavBar />
        <div className="cv-container">
          <p>CV Download</p>
        </div>
      </div>
    </MainContainer>
  );
};
const MainContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
  padding: 10px 10px;
  padding-bottom: 0px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1232px;
    .logo {
      font-weight: 600;
      font-size: 22px;
      line-height: 1.35;

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
