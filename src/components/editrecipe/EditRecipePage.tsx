import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";
import AuthService from "../../services/auth";
import { useEffect, useState } from "react";
import EditRecipeCard from "./EditRecipeCard";

interface RouteParams {
  id: string;
}

interface RecipePage extends RouteComponentProps<RouteParams> {}

const EditRecipePage: React.FC<RecipePage> = (props) => {
  const [recipe, setData] = useState<any>();

  const readData = () => {
    let id: number = Number(props.match.params.id);
    AuthService.getRecipeToEdit(id).then(
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
      {recipe ? <EditRecipeCard data={recipe.data} /> : <p>ładuje/błąd</p>}
    </div>
  );
};

export default EditRecipePage;
