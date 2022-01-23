import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0px;
    font-family: 'Mochiy Pop P One', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.primary};
  }
`;