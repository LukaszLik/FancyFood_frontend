import React from "react";
import FancyFoodLogo from "../../images/FancyFoodLogo.png";
import "./Nav.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src={FancyFoodLogo} alt="FancyFood logo" />
      </Link>
      <div className="nav-links">
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/login"
        >
            <span className="btn-email-text btn-texts-login">zaloguj się</span>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/signup"
        >
            <span className="btn-signup-text btn-texts-login">zarejestruj się</span>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
