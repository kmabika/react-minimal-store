// globalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
  scrollbar-width: none;
}

*::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.emerald};;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #43464e;
}

*::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.white};;
}

body {
  font-family: ${({ theme }) => theme.fonts.raleway},sans-serif;
  font-size: 18px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.bunker};
}

p,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
}
`;

export default GlobalStyle;
