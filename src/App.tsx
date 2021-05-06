import React from "react";
import "./App.css";
import Nav from "./common/nav/Nav";
import { LoginPage } from "./components/login/LoginPage";
import { Route, Switch } from "react-router-dom";
import { RegisterPage } from "./components/register/RegisterPage";
import AddProducts from "./components/addproducts/AddProducts";
interface State {}
interface Props {}

export class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/signup" exact component={RegisterPage} />
          <Route path="/addproducts" exact component={AddProducts} />
        </Switch>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div className="App">
      <AddProducts />
    </div>
  );
};
