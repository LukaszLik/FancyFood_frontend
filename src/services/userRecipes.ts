import axios from "axios";
import header from "./header";

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
}

export default new UserRecipesService();
