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
import "./Register.css";

interface State {
  email: string;
  username: string;
  password: string;
  showPassword: boolean;
  message: string;
}

const RegisterCard = () => {
  const [values, setValues] = React.useState<State>({
    email: "",
    username: "",
    password: "",
    showPassword: false,
    message: "",
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setValues({
      ...values,
      message: "",
    });

    AuthService.register(values.email, values.username, values.password).then(
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
    minWidth: "30vh",
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
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h5">Utwórz konto</Typography>
        </CardContent>
        <CardContent>
          <form method="POST" onSubmit={handleRegister}>
            <Grid container direction="column" alignItems="center">
              <TextField
                className="login-input"
                id="username"
                type="text"
                label="Imię i nazwisko"
                placeholder="Imię i nazwisko"
                margin="normal"
                variant="filled"
                name="username"
                onChange={handleChange("username")}
                value={values.username}
              />
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
                <span className="btn-login-txt">Zarejestruj się</span>
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Box>
        <p className="login-link-des">
          Masz już konto?{" "}
          <Link to="/login" className="login-link">
            ZALOGUJ SIĘ
          </Link>
        </p>
      </Box>
    </Grid>
  );
};

export default RegisterCard;
