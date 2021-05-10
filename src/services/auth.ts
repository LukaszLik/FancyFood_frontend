import axios from "axios";

class AuthService {
  async login(email: string, password: string) {
    return axios
      .post("signin", {
        email,
        password,
      })
      .then((response) => {
        if (response.headers.authorization && response.headers.userinfo) {
          localStorage.setItem("user", JSON.stringify(response.headers));
          localStorage.setItem(
            "userInfo",
            JSON.stringify(response.headers.userinfo)
          );
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
  }

  register(email: string, username: string, password: string) {
    return axios.post( "registration", {
      email,
      username,
      password,
    });
  }

  getUser() {
    return JSON.parse(localStorage.getItem("userInfo") as string);
  }
}

export default new AuthService();
