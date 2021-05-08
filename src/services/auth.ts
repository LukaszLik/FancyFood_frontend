import axios from "axios";

class AuthService {
  async login(email: string, password: string) {
    return axios
      .post("signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.headers.authorization) {
          localStorage.setItem("user", JSON.stringify(response.headers));
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email: string, username: string, password: string) {
    console.log(email, username, password);
    return axios.post( "registration", {
      email,
      username,
      password,
    });
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }
}

export default new AuthService();
