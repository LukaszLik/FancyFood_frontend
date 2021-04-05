import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Colors.css";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" style = {{backgroundColor: "var(--white)"}}/>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <p>
          Edit <code style = {{color: "var(--secondary_d)"}}>src/App.tsx</code> and save to reload.
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
    </div>
    </ThemeProvider>
  );
}

export default App;
