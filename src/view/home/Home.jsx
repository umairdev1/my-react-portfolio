import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const Home = () => {
  return (
    <MainContainer>
      <Header />
      <HeroSection />
    </MainContainer>
  );
};

const MainContainer = styled.div``;
export default Home;
