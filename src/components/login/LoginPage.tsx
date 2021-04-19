import React from "react";
import "./Login.css";
import LoginCard from "./LoginCard";

interface State {}
interface Props {}

export class LoginPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="login-page">
        <LoginCard />
      </div>
    );
  }
}
