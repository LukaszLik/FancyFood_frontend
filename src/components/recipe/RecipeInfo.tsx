import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../services/auth";
import { useEffect, useState } from "react";

interface RouteParams {
  id: string;
}

interface RecipeInfo extends RouteComponentProps<RouteParams> {}

const RecipeInfo: React.FC<RecipeInfo> = (props) => {
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
    <div>
      <h1>{recipe ? recipe.data.recipeName : "Loading..."}</h1>
      <p>{recipe ? recipe.data.creatorUsername : ""}</p>
    </div>
  );
};

export default RecipeInfo;
