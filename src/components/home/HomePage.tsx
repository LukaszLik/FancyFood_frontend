import React from "react";
import FoodCard from "./FoodCard";
import RecipeFilters from "./RecipeFilters";
import axios from "axios";
import "./HomePage.css";

interface State {
  isLoading: boolean;
  recipes: CardData[];
  pageNumber: number;
}

interface Props {}

export class CardData {
  recipeId: Number;
  recipeName: String;
  creatorId: number;
  createdOn: string;
  creatorUsername: string;
  category: string;

  constructor(
    recipeId = 1,
    recipeName = "test",
    creatorId = 1,
    createdOn = Date(),
    creatorUsername = "test",
    category = "test"
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.creatorId = creatorId;
    this.createdOn = createdOn;
    this.creatorUsername = creatorUsername;
    this.category = category;
  }
}

export class HomePage extends React.Component<Props, State> {
  state: State = {
    isLoading: true,
    recipes: [] as CardData[],
    pageNumber: 0,
  };

  async componentDidMount() {
    const response = axios
      .get(`http://localhost:8081/api/v1/recipe/${this.state.pageNumber}`)
      .then((response) => {
        this.setState(
          (state) => {
            return { isLoading: false, recipes: response.data.content };
          },
          () => {
            console.log(this.state.recipes[0].recipeId);
          }
        );
      });
  }
  render() {
    const recipes: CardData[] = [];

    if (this.state.isLoading) {
      return <div></div>;
    }

    for (let recipe of this.state.recipes) {
      recipes.push(recipe);
      console.log(recipes);
    }

    return (
      <div>
        <RecipeFilters />
        <div className="card-area">
          <div className="card-container">
            {recipes.map((recipe, recipeIdx) => {
              {
                return <FoodCard {...recipe} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
