import axios from "axios";
import header from "./header";

const API_URL = "http://localhost:8081/api/v1/";

class UserRecipesService {
  async getUserRecipe(pageNumber: number) {
    return axios.get(`/recipe/user/page/${pageNumber}`, {
      headers: header(),
    });
  }

  async rateRecipe(recipeId: number, mark: number) {
    return axios.post(`/recipe/${recipeId}/mark`, mark, {
      headers: header(),
    });
  }

  async addFavorite(recipeId: number) {
    return axios.post(
      `/recipe/${recipeId}/favorites/add`,
      {},
      { headers: header() }
    );
  }

  async removeFavorite(recipeId: number) {
    return axios.post(
      `/recipe/${recipeId}/favorites/remove`,
      {},
      {
        headers: header(),
      }
    );
  }
}

export default new UserRecipesService();
