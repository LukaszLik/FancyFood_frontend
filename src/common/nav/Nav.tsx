import React from "react";
import FancyFoodLogo from "../../images/FancyFoodLogo.png";
import "./Nav.css";
import { Button, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth";

interface State {
  logged: boolean;
}

const Nav = () => {
  const currentUser = AuthService.getUser();

  const [states, setState] = React.useState<State>({
    logged: true,
  });

  const logOutHandle = () => {
    setState({
      logged: false,
    });
    AuthService.logout();
  };

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
          <div style={{ paddingTop: "5px" }}>
            {currentUser ? (
              <Typography variant="subtitle1" className="login-data">
                {currentUser}
              </Typography>
            ) : (
              <Button
                variant="outlined"
                color="secondary"
                component={Link}
                to="/login"
                style={{ marginRight: "20px" }}
              >
                <span className="btn-email-text btn-texts-login">
                  zaloguj się
                </span>
              </Button>
            )}
          </div>
          <Button
            variant="contained"
            color="secondary"
            component={Link}
            to={currentUser ? "/" : "/signup"}
            onClick={logOutHandle}
          >
            <span className="btn-signup-text btn-texts-login">
              {currentUser ? "wyloguj się" : "zarejestruj się"}
            </span>
          </Button>
        </Grid>
      </Grid>
    </nav>
  );
};

export default Nav;
