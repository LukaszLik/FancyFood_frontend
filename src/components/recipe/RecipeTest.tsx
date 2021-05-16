import { RouteComponentProps } from "react-router-dom";
import AuthService from "../../services/auth";
import { log } from "util";
import { useEffect, useState } from "react";

interface RouteParams {
  id: string;
}

interface RecipeTest extends RouteComponentProps<RouteParams> {}

const RecipeTest: React.FC<RecipeTest> = (props) => {
  const [recipe, setData] = useState<any>();

  const readData = () => {
    let id: number = Number(props.match.params.id);
    AuthService.getRecipe(id).then(
      (response) => {
        console.log(response);
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
    <div>
      <h1>{recipe ? recipe.data.recipeName : "Loading..."}</h1>
      <p>{recipe ? recipe.data.creatorUsername : ""}</p>
    </div>
  );
};

export default RecipeTest;
