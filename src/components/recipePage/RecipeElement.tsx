import React from "react";
import "./Recipe.css";

const RecipeElement = (props) => {
  return (
    <div className="recipeEl">
      <h2 className="text">{props.title}</h2>

      {props.variant ? (
        <ul className="cont">
          {props.textTable.map((eln, index) => {
            return (
              <li key={index} className="listEl">
                {eln.data}
              </li>
            );
          })}
        </ul>
      ) : (
        <ol className="cont">
          {props.textTable.map((eln, index) => {
            return (
              <li key={index} className="listEl">
                {eln.data}
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};

export default RecipeElement;
