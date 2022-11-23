import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00617D",
    },
    secondary: {
      main: "#fc6a03",
    },
    primaryBG: {
      main: "rgba(0, 97, 125, .1)",
    },
    primaryBGDark: {
      main: "#cbe9f4",
    },
    white: {
      main: "#fff",
    },
  },

  // components: {
  //   MuiOutlinedInput: {
  //     styleOverrides: {
  //       notchedOutline: {
  //         fontSize: "18px",
  //       },
  //     },
  //   },

  //   MuiInputLabel: {
  //     styleOverrides: {
  //       outlined: {
  //         "&.MuiInputLabel-shrink": {
  //           fontSize: "2em",
  //         },
  //       },
  //     },
  //   },
  // },

  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 15,
    display4: {
      fontSize: 15,
    },
    display3: {
      fontSize: 15,
    },
    display2: {
      fontSize: 15,
    },
    display1: {
      fontSize: 15,
    },
    headline: {
      fontSize: 15,
    },
    title: {
      fontSize: 15,
    },
    subheading: {
      fontSize: 15,
    },
    body2: {
      fontSize: 15,
    },
    body1: {
      fontSize: 15,
    },
    caption: {
      fontSize: 15,
    },
    button: {
      fontSize: 15,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
