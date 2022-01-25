import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    font-family: 'Rubik', sans-serif;
  }

  body {
    height: 100vh;
    background-image: linear-gradient( blue, pink);
  }
`;

