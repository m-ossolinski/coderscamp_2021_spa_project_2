import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box; 
    margin: 0;
    padding: 0;
  }

  html {
  font-size: 62.5%;
}

  body {
    line-height: 1.5;
    font-size: 62.5%;
    background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.primaryLight} 33.333%,
    ${({ theme }) => theme.colors.primary} 33.333% 66.666%,
    ${({ theme }) => theme.colors.primaryDark} 66.666%
  );
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  input, button, textarea, select {
    font: inherit;
  }
`;
