import React from "react";
import logo from "./logo.svg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme({
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ThemeProvider>
  );
};

export default App;
