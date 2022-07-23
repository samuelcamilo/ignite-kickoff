import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;

    --gray-100: #e1e1e6;
    --gray-300: #c4c4cc;
    --gray-400: #8d8d99;
    --gray-600: #323238;
    --gray-700: #29292e;
    --gray-800: #202024;
    --gray-900: #121214;

    --green-500: #00875f;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // com base no max-width, a fonte diminui para 15px.
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // com base no max-width, a fonte diminui para 15px.
    }
  }

  body {
    background: var(--gray-900);
    color: var(--gray-300);

    -webkit-font-smoothing: antialiased; // padronização de fontes, além de tornar as fontes mais desenhadas.
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`