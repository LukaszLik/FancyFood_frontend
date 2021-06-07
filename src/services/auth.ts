import axios from "axios";
import header from "./header";

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
    return axios.post("registration", {
      email,
      username,
      password,
    });
  }

  getUser() {
    return JSON.parse(localStorage.getItem("userInfo") as string);
  }

  getUserCredentials() {
    return JSON.parse(localStorage.getItem("user") as string);
  }

  getRecipe(id: Number) {
    return axios.get(`${id}`);
  }

  getRecipeToEdit(id: Number) {
    return axios.get(`/recipe/${id}`);
  }

  getRecipePages(nr: number) {
    return axios.get(`recipe/page/${nr}`);
  }

  getPage(
    pageNumber: number,
    containing: string,
    descending: boolean,
    fieldFilter: string
  ) {
    return axios.get(
      `recipe/page/${pageNumber}?containing=${containing}&descending=${descending}&fieldFilter=${fieldFilter}`, {
        headers: header()
        }
    );
  }
}

export default new AuthService();
