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
  FormHelperText,
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

  const [errors, setErrors] = React.useState<any>();

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });

    if (prop === "username") {
      validateUsername(event.target.value);
    } else if (prop === "email") {
      validateEmail(event.target.value);
    } else if (prop === "password") {
      validatePassword(event.target.value);
    }
  };

  const validateEmail = (value: any) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setErrors({ ...errors, email: "" });
    if (value.length === 0) {
      setErrors({ ...errors, email: "Email jest wymagany." });
    } else if (!re.test(String(value).toLowerCase())) {
      setErrors({ ...errors, email: "Niepoprawny adres email." });
    }
  };

  const validateUsername = (value: any) => {
    setErrors({ ...errors, username: "" });
    if (value.length === 0) {
      setErrors({ ...errors, username: "Imię i nazwisko jest wymagane." });
    } else if (value.length > 255) {
      setErrors({
        ...errors,
        username: "Imię i nazwisko nie powinno mieć więcej niż 255 znaków.",
      });
    }
  };

  const validatePassword = (value: any) => {
    setErrors({ ...errors, password: "" });
    if (value.length === 0) {
      setErrors({ ...errors, password: "Hasło jest wymagane." });
    } else if (
      !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+,.\\\/;':"-]).{8,}$/.test(
        value
      )
    ) {
      setErrors({
        ...errors,
        password:
          "Hasło powinnno zawierać przynajmniej 8 znaków, 1 dużą, 1 małą literę i 1 cyfrę.",
      });
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
      className="back-image"
    >
      <Card style={paperStyle} variant="outlined">
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h5">Utwórz konto</Typography>
        </CardContent>
        <CardContent>
          <form method="POST" onSubmit={handleRegister}>
            <Grid container direction="column" alignItems="center">
              <TextField
                required
                className="login-input"
                error={Boolean(errors?.username)}
                helperText={errors?.username}
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
                required
                className="login-input"
                error={Boolean(errors?.email)}
                helperText={errors?.email}
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
                <InputLabel
                  style={{ color: errors?.password ? "red" : "gray" }}
                  htmlFor="standard-adornment-password"
                >
                  Password *
                </InputLabel>
                <FilledInput
                  required
                  id="password"
                  error={Boolean(errors?.password)}
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
                <FormHelperText
                  style={{ color: errors?.password !== "" ? "red" : "gray" }}
                  id="component-error-text"
                >
                  {errors?.password}
                </FormHelperText>
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
                disabled={Boolean(
                  errors?.password || errors?.username || errors?.email
                )}
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
