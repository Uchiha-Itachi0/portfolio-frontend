import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

  }
  :root{
    --primary: #FFF6E6;
    --secondary: #324235;
    --gray-1: #BCB4B4;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
    --white : white;
    --black: black;
    --body-bg: #54436B;
    --light-green: #50CB93;
    --section-heading-padding: 4em 2em;
    --section-heading-small-padding: 2em 1em;
  }
  html{
    ${'' /* font-size: 10px; */}
    font-family: 'Roboto Mono';
    background-color: var(--primary);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  body{
    overflow-x: hidden;
  }
  #root{
    overflow-x: hidden;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
