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
      main: "#dde7e9",
    },
    primaryBGDark: {
      main: "#cbe9f4",
    },
    white: {
      main: "#fff",
    },
  },
  // overrides: {
  //   MuiLinearProgress: {
  //     root: {
  //       borderRadius: 4,
  //       height: 7,
  //     },
  //     bar1Determinate: {
  //       borderRadius: 4,
  //     },
  //     colorPrimary: {
  //       backgroundColor: "grey",
  //     },
  //   },
  // },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
