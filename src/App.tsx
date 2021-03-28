import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";
import TopBar from "./component/TopBar";

const paletteTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#0e4da4",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
      contrastText: "#0e4da4",
    },
  },
});

const theme = createMuiTheme(
  {
    overrides: {
      MuiButton: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  paletteTheme
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
    </ThemeProvider>
  );
};

export default App;
