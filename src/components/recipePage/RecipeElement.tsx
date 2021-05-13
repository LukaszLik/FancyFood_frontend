import React from "react";

const RecipeElement = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>

      <div>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default RecipeElement;
