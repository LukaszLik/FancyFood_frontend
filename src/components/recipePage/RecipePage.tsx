import React from "react";
import RecipeInfo from "./RecipeInfo";
import RecipePageLoading from "./RecipePageLoading";

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
        setData(response);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="back-image">
      {recipe ? <RecipeInfo data={recipe.data} /> : <RecipePageLoading />}
    </div>
  );
};

export default RecipePage;
