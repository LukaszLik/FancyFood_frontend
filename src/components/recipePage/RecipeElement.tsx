import React from "react";
import "./Recipe.css";

function createText(textTable) {
  return textTable.map((text) =><li className="listEl">{text}</li>);
}

const RecipeElement = (props) => {
  return (
    <div className="recipeEl">
      <h3>{props.title}</h3>

     <ul className="cont">
      {createText(props.textTable)}
     </ul>

    </div>
  );
};

export default RecipeElement;
