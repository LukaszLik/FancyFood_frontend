import React from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  FilledInput,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth";
import authHeader from "../../services/header";
import "./Login.css";

//https://material-ui.com/es/components/text-fields/
interface State {
  password: string;
  showPassword: boolean;
  email: string;
  message: string
}

const LoginCard = () => {
  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
    email: "",
    message: ""
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
      message: ""
    })

    AuthService.login(values.email, values.password).then(
        () => {
          window.location.reload();
          console.log("log in")
          console.log(authHeader())
        },
        error => {
          const resMessage =
              (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
              error.message ||
              error.toString();

          setValues({
            ...values,
            message: resMessage
          })
        }
    );

  }

  return (
    <div className="login-card">
      <form className="login-card-form"  method="POST" onSubmit={handleLogin}>
        <h2>Zaloguj się</h2>
        <div className="login-card-form-container">
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
        <FormControl variant="filled" className="password-input">
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <FilledInput
            id="password"
            type={values.showPassword ? "text" : "password"}
            placeholder="Password"
            value={values.password}
            name="email"
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        {values.message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {values.message}
              </div>
            </div>
        )}
        <Button variant="contained" type="submit" color="secondary" className="btn-login" size="large">
          <span className="btn-login-txt">Zaloguj się</span>
        </Button>
        </div>
      </form>
      <p className="login-link-des">
        Zapomniałeś hasła? <Link to="#" className="login-link">PRZYPOMNIJ HASLO</Link>
      </p>
      <p className="login-link-des">
        Nie masz jeszcze konta? <Link to="#" className="login-link">ZAREJESTRUJ SIE</Link>
      </p>
    </div>
  );
};

export default LoginCard;
