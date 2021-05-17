import axios from "axios";

const API_URL = "http://localhost:8081/api/v1/";

class AuthService {
  async login(email: string, password: string) {
    return axios
      .post(API_URL + "signin", {
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
    return axios.post(API_URL + "registration", {
      email,
      username,
      password,
    });
  }

  getUser() {
    return JSON.parse(localStorage.getItem("user") as string);
  }


  getRecipe(id: Number) {
    return axios.get(API_URL + `recipe/${id}`);
  }

  getRecipePages(nr: number) {
    return axios.get(API_URL + `recipe/page/${nr}`);
  }
}

export default new AuthService();
