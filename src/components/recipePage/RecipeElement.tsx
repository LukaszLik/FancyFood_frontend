import React from "react";
import "./Recipe.css";


const RecipeElement = (props) => {

  return (
    <div className="recipeEl">
      <h2>{props.title}</h2>

        {props.variant ? (
            <ul className="cont">
                {props.textTable.map((eln, index)=>{
                    return<li className="listEl">{eln.data}</li>
                })}
            </ul>
        ) : (
            <ol className="cont">
                {props.textTable.map((eln, index)=>{
                    return<li className="listEl">{eln.data}</li>
                })}
            </ol>
        )}



    </div>
  );
};

export default RecipeElement;
