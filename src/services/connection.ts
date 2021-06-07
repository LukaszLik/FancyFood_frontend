import axios from "axios";
import header from "./header";
import auth from "./auth";

const API_URL = "http://localhost:8081/api/v1/";

class ConnectionService {
  saveRecipe(dataToSave: any) {
    const formData = new FormData();
    const data = {
      recipeName: dataToSave.recipeName,
      createdOn: new Date(),
      creatorUsername: auth.getUserCredentials()["username"],
      creatorEmail: auth.getUserCredentials()["userinfo"],
      tags: dataToSave.tags,
      servingQuantity: dataToSave.servingQuantity,
      timeDescription: dataToSave.timeDescription,
      steps: dataToSave.steps,
      ingredients: dataToSave.ingredients,
    };

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    formData.append("data", blob);
    formData.append("photo", dataToSave.image);

    return axios
      .post(API_URL + "recipe/addRecipe", formData, {
        headers: header(),
      })
      .then((response) => {
        return response.data;
      });
  }

  updateRecipe(dataToSave: any) {
    const formData = new FormData();
    const data = {
      recipeName: dataToSave.recipeName,
      createdOn: new Date(),
      creatorUsername: auth.getUserCredentials()["username"],
      creatorEmail: auth.getUserCredentials()["userinfo"],
      tags: dataToSave.tags,
      servingQuantity: dataToSave.servingQuantity,
      timeDescription: dataToSave.timeDescription,
      steps: dataToSave.steps,
      ingredients: dataToSave.ingredients,
    };

    const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

    formData.append("data", blob);
    if (dataToSave.image != "-1") {
      formData.append("photo", dataToSave.image);
    }

    return axios
      .post(API_URL + `recipe/update/${dataToSave.recipeId}`, formData, {
    headers: {...header(), "Content-Type": "multipart/form-data"},
      })
      .then((response) => {
        return response.data;
      });
  }
}

export default new ConnectionService();
