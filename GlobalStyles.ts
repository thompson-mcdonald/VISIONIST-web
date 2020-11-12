import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    ${"" /* it appears this was making the base font-size 16px before */}
    font-size: 10px;
    --rust: #A34815;
    --black: #111111;
    --char: #3D3D3D;
    --lh: 1.8rem;
    --max-lines: 3;
    --max-lines-news: 6;
  }

  @font-face {
    font-family: 'Nimbus Sans L';
    font-weight: normal;
    src: local('Nimbus Sans L'),
      url('/fonts/nimbussanl-reg.ttf') format('truetype'),
      url('/fonts/nimbussanl-reg.woff2') format('woff2'),
      url('/fonts/nimbussanl-reg.woff') format('woff');
  }

  html, body {
    margin: 0 !important;
    font-family: 'Nimbus Sans L', Helvetica, Arial, sans-serif;
    letter-spacing: -0.2em
    font-size: 10px;
    background: #FAFAFA;
  }

  html, body {
    scroll-behavior: smooth;
  }

  #__next {
  }

  body {
    height: 100%;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  a:link, a:visited {
    color: #111;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  select {
    font-family: helvetica;
    padding: 2rem 0;
    font-size: 1.3rem;
  }

  h1, h2, h3, h4, h5, h6, h7, p, a, ul, li, button, input {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
  }

  /* Do we need this?? */
  input, button {
    &:focus {
      outline: none;
    }
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`;

export default GlobalStyles;
