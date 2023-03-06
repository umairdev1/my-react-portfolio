import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <MainNav>
      <p className="nav-title">Home</p>
      <p className="nav-title">About</p>
      <p className="nav-title">Skills</p>
      <p className="nav-title">Experience</p>
      <p className="nav-title">Portfolio</p>
      <p className="nav-title">Contact</p>
    </MainNav>
  );
};
const MainNav = styled.nav`
  display: flex;
  flex-direction: row;
  .nav-title {
    font-weight: 600;
    font-size: 13px;
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
export default NavBar;
