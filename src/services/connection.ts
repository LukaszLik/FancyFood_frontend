import axios from "axios";
import header from "./header";
import auth from "./auth";

const API_URL = "http://localhost:8081/api/v1/";

class ConnectionService {
  saveRecipe(dataToSave: any) {
    return axios
      .post(
        API_URL + "recipe/addRecipe",
        {
          recipeName: dataToSave.recipeName,
          createdOn: new Date(),
          creatorUsername: auth.getUser()["username"],
          creatorEmail: auth.getUser()["userinfo"],
          tags: dataToSave.tags,
          servingQuantity: dataToSave.servingQuantity,
          timeDescription: dataToSave.timeDescription,
          steps: dataToSave.steps,
          ingredients: dataToSave.ingredients,
        },
        {
          headers: header(),
        }
      )
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new ConnectionService();
