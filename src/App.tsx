import React from "react";
import "./App.css";
import Nav from "./common/nav/Nav";
import {LoginPage} from "./components/login/LoginPage";
import { Route, Switch } from "react-router-dom";

interface State {}
interface Props {}

export class App extends React.Component<Props, State>{
  render() {
    return (
        <div className="App">
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={LoginPage} />
          </Switch>
        </div>
    );
  }
}

const Home = () => {
  return (
      <div className="App">
        Home
      </div>
  );
}