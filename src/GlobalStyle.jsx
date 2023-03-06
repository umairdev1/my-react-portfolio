import * as styled from "styled-components";
export const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bg};
  }
  .grid {
    display: grid;
    gap: 4rem;
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
  }
  .grid-three-column {
    grid-template-columns: repeat(3, 0);
  }
  .grid-four-column {
    grid-template-columns: repeat(4, 0);
  }
`;
