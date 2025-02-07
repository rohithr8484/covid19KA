import React, { useEffect } from "react";
import Archia from "./fonts/archia-regular-webfont.ttf";
import Main from "./Components/Main";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter as Router } from "react-router-dom";
import { PageView, initGA } from "./Components/Tracking";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const archia = {
  fontFamily: "Archia",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    local('Archia'),
    local('Archia-Regular'),
    url(${Archia}) format('woff2')
  `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

function App() {
  useEffect(() => {
    initGA("UA-192838043-1");
    PageView();
  }, []);
  let preferedMode0 = useMediaQuery("(prefers-color-scheme: dark)");
  const [darkMode, setDarkMode] = React.useState(false);
  let preferedMode = preferedMode0 ^ darkMode;

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: preferedMode ? "dark" : "light",
          background: {
        default: preferedMode ? "#1C1124" : "#dee1ec",
        paper: preferedMode ? "#1C2237" : "#ffffff",
      },
          secondary: {
        main: "#1C2237",
      },
        },

        typography: {
          fontFamily: "Archia, Arial",
        },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              "@font-face": [archia],
            },
          },
        },
      }),
    [preferedMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Main setDarkMode={setDarkMode} darkMode={darkMode} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
