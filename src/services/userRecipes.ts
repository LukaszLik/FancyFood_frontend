import axios from "axios";
import header from "./header";

class UserRecipesService {
    async getUserRecipe(pageNumber: number) {
        return axios.get(`recipe/my/page/${pageNumber}`, {
            headers: header(),
        })
    }
}

export default new UserRecipesService();