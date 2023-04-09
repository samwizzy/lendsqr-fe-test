import { createTheme, Theme } from "@mui/material/styles";
import AvenirNextLPro from "/assets/fonts/AvenirNextLTPro-Regular.otf";

const theme: Theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#39cdcc", dark: "#278f8e", light: "#60d7d6", contrastText: "#fff" },
    secondary: { main: "#213f7d", dark: "#172c57", light: "#4d6597" },
    text: {
      primary: "#333",
    },
    common: {
      white: "#fff",
      black: "#000",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Avenir Next",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Avenir Next';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Avenir Next'), local('AvenirNextLTPro-Regular'), url(${AvenirNextLPro}) format('otf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default theme;
