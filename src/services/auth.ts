import axios from "axios";

const API_URL = "http://localhost:8081/api/v1/";

class AuthService {
  login(email: string, password: string) {
    return axios
      .post(API_URL + "signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.headers.authorization) {
          localStorage.setItem("user", JSON.stringify(response.headers));
          console.log("set local storage")
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string) {
    return axios.post(API_URL + "registration", {
      username,
      email,
      password,
    });
  }

  getUser() {
    return JSON.parse(<string>localStorage.getItem("user"));
  }
}

export default new AuthService();
