import React from "react";
import "./App.css";
import Nav from "./common/nav/Nav";
import { LoginPage } from "./components/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import { RegisterPage } from "./components/register/RegisterPage";
import { HomePage } from "./components/home/HomePage";
import RecipeInfo from "./components/recipe/RecipeInfo";

interface State {}
interface Props {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegisterPage} />
          <Route path="/recipe/:id" exact component={RecipeInfo} />
        </Switch>
      </div>
    );
  }
}
