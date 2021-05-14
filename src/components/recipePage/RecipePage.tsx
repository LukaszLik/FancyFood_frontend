import React from "react";
import RecipeInfo from "./RecipeInfo";
interface State {}
interface Props {}

export class RecipePage extends React.Component<Props, State> {
  render() {
    return (
      <div className="back-image">
        <RecipeInfo recipeId={4} />
      </div>
    );
  }
}
