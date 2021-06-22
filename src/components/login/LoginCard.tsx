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
  Card,
  CardContent,
  FormHelperText,
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

  const [errors, setErrors] = React.useState<any>();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });

      switch (prop) {
        case "email": {
          validateEmail(event.target.value);
          break;
        }

        case "password": {
          validatePassword(event.target.value);
          break;
        }
      }
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
        window.location.href = "/";
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        if (Boolean(resMessage)) {
          setValues({
            ...values,
            message: "Błędne dane",
          });
        }
      }
    );
  };

  const validateEmail = (value: any) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErrors({ ...errors, email: "" });
    if (value.length === 0) {
      setErrors({ ...errors, email: "Email jest wymagany." });
    } else if (!re.test(String(value).toLowerCase())) {
      setErrors({ ...errors, email: "Niepoprawny adres email." });
    }
  };

  const validatePassword = (value: any) => {
    setErrors({ ...errors, password: "" });
    if (value.length === 0) {
      setErrors({ ...errors, password: "Hasło jest wymagane." });
    }
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
        <CardContent style={{ paddingBottom: "0px" }}>
          <p className="login-text">Zaloguj się</p>
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
                error={Boolean(errors?.email)}
                helperText={errors?.email}
                onChange={handleChange("email")}
                value={values.email}
              />
              <FormControl
                variant="filled"
                margin="normal"
                size="medium"
                className="password-input"
              >
                <InputLabel
                  htmlFor="standard-adornment-password"
                  error={Boolean(errors?.password)}
                >
                  Password
                </InputLabel>
                <FilledInput
                  id="password"
                  type={values.showPassword ? "text" : "password"}
                  placeholder="Password"
                  error={Boolean(errors?.password)}
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
                <FormHelperText
                  style={{ color: errors?.password !== "" ? "red" : "gray" }}
                  id="component-error-text"
                >
                  {errors?.password}
                </FormHelperText>
              </FormControl>
              <Box style={{ minHeight: "4vh" }} margin="normal">
                {values.message && (
                  <div className="wrong-input">{values.message}</div>
                )}
              </Box>
              <Button
                variant="contained"
                type="submit"
                color="secondary"
                className="btn-login"
                size="large"
                disabled={Boolean(errors?.email || errors?.password)}
              >
                <span className="btn-login-txt">Zaloguj się</span>
              </Button>
            </Grid>
          </form>
        </CardContent>
      </Card>
      <Box>
        <p className="login-link-des">
          Nie masz jeszcze konta?{" "}
          <Link to="/signup" className="login-link">
            ZAREJESTRUJ SIE
          </Link>
        </p>
      </Box>
    </Grid>
  );
};

export default LoginCard;
