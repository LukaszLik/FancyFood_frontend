import React from "react";
import FancyFoodLogo from "../../images/FancyFoodLogo.png";
import "./Nav.css";
import { Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Grid
        container
        direction="row"
        alignItems="center"
        style={{ minHeight: "9vh", background: "rgb(255, 255, 255)" }}
      >
        <Grid
          container
          justify="flex-start"
          item
          xs={8}
          style={{ paddingLeft: "25px" }}
        >
          <Link to="/">
            <img
              className="nav-logo"
              src={FancyFoodLogo}
              alt="FancyFood logo"
            />
          </Link>
        </Grid>

        <Grid
          container
          justify="flex-end"
          item
          xs={4}
          style={{ paddingRight: "25px" }}
        >
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/login"
            style={{ marginRight: "20px" }}
          >
            <span className="btn-email-text btn-texts-login">zaloguj się</span>
          </Button>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to="/signup"
          >
            <span className="btn-signup-text btn-texts-login">
              zarejestruj się
            </span>
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
