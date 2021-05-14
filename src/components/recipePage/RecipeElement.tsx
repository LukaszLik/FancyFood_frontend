import React from "react";
import "./Recipe.css";


const RecipeElement = (props) => {

  return (
    <div className="recipeEl">
      <h3>{props.title}</h3>

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
