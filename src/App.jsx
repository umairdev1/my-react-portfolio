import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./view/home/Home";
const App = () => {
  const theme = {
    colors: {
      primary: "#3F9BFF",
      bg: "#F6FCFF",
      gray: "#9d9f9f",
      white: "white",
      black: "black",
      gradient: "linear-gradient(90deg, #3f9bff 10%, #535cff 100%)",
      pink: "#FF0055",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
