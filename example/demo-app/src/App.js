import React from "react";
import logo from "./logo.svg";
import { Button, ThemeProvider } from "lounge-design-system";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Button variant="solid" variantColor="blue" size="lg">
            Hello World
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
