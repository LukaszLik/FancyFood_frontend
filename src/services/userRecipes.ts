import axios from "axios";

class UserRecipesService {
    async getUserRecipe(pageNumber: number){
        return axios.get(`recipe/my/page/${pageNumber}`)
    }
}

export default new UserRecipesService();