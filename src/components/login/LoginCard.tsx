import React from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FilledInput,
  FormControl,
  InputLabel,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth";
import "./Login.css";

interface State {
  password: string;
  showPassword: boolean;
  email: string;
  message: string;
}

const LoginCard = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
    email: "",
    message: "",
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setValues({
      ...values,
      message: "",
    });

    AuthService.login(values.email, values.password).then(
      () => {
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setValues({
          ...values,
          message: resMessage,
        });
      }
    );
  };

  const paperStyle = {
    minHeight: "35vh",
    width: "55vh",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
  };
  return (
    <Grid
      container
      alignItems="center"
      direction="column"
      justify="center"
      style={{ minHeight: "90vh" }}
    >
      <Card style={paperStyle} variant="outlined">
        <CardContent>
          <Typography variant="h5">Zaloguj się</Typography>
        </CardContent>
        <CardContent>
          <form method="POST" onSubmit={handleLogin}>
            <Grid container direction="column" alignItems="center">
              <TextField
                className="login-input"
                id="email"
                type="text"
                label="Email"
                placeholder="Email"
                margin="normal"
                variant="filled"
                name="email"
                onChange={handleChange("email")}
                value={values.email}
              />
              <FormControl
                variant="filled"
                margin="normal"
                size="medium"
                className="password-input"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={values.password}
                  name="password"
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <Box style={{ minHeight: "4vh" }} margin="normal">
                {values.message && (
                  <div className="form-group">{values.message}</div>
                )}
              </Box>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                className="btn-login"
                size="large"
              >
                <span className="btn-login-txt">Zaloguj się</span>
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Box>
        <p className="login-link-des">
          Zapomniałeś hasła?{" "}
          <Link to="#" className="login-link">
            PRZYPOMNIJ HASLO
          </Link>
        </p>
        <p className="login-link-des">
          Nie masz jeszcze konta?{" "}
          <Link to="#" className="login-link">
            ZAREJESTRUJ SIE
          </Link>
        </p>
      </Box>
    </Grid>
  );
};

export default LoginCard;
