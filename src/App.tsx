import React from "react";
import "./App.css";
import Nav from "./common/nav/Nav";
import { LoginPage } from "./components/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import { RegisterPage } from "./components/register/RegisterPage";
import HomePage from "./components/home/HomePage";
import AddProducts from "./components/addproducts/AddProducts";
import RecipePage from "./components/recipePage/RecipePage";
import { UserPage } from "./components/user/UserPage";
import EditRecipePage from "./components/editrecipe/EditRecipePage";
import NotFound from "./common/errorPages/NotFound";
import AuthService from "./services/auth";
import Unauthorized from "./common/errorPages/Unauthorized";

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
          <Route
            path="/recipe/add"
            exact
            component={
              AuthService.getUser() !== null ? AddProducts : Unauthorized
            }
          />
          <Route path="/recipe/:id" exact component={RecipePage} />
          <Route
            path="/profile"
            exact
            component={AuthService.getUser() !== null ? UserPage : Unauthorized}
          />
          <Route
            path="/editrecipe/:id"
            exact
            component={
              AuthService.getUser() !== null ? EditRecipePage : Unauthorized
            }
          />

          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}
