import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Register from "./components/register.component";
import { Route, Switch } from "react-router-dom";
import { Button } from "@material-ui/core";

function App() {
  return (
    <div className="container mt-3">
      <Button variant="contained" color="secondary" href="/register">ZAREJESTRUJ SIĘ</Button>
          <Switch>
            <Route exact path="/register" component={Register} />
          </Switch>
      </div>
  );
}

export default App;
