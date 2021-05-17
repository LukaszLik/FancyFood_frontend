import React from "react";
import RecipeInfo from "./RecipeInfo";

import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../services/auth";
import { useEffect, useState } from "react";

interface RouteParams {
  id: string;
}

interface RecipePage extends RouteComponentProps<RouteParams> {}

const RecipePage: React.FC<RecipePage> = (props) => {
  const [recipe, setData] = useState<any>();

  const readData = () => {
    let id: number = Number(props.match.params.id);
    AuthService.getRecipe(id).then(
      (response) => {
        console.log(response); // todo dla testów
        setData(response);
      },
      (error) => {
        console.log(error); // todo zmienić na coś lepszego
      }
    );
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="back-image">
      {recipe ? (
        <RecipeInfo recipeId={recipe.data.recipeId} />
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default RecipePage;
