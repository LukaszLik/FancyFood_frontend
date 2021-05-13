import React from "react";
import FoodCard from "./FoodCard";
import RecipeFilters from "./RecipeFilters";
import axios from "axios";
import "./HomePage.css";
import Pagination from "@material-ui/lab/Pagination";

interface State {
  isLoading: boolean;
  recipes: CardData[];
  pageNumber: number;
  pages;
}

interface Props {}

export class Tag {
  id: number;
  tagName: string;

  constructor(id = 0, tagName = "placeholder") {
    this.id = id;
    this.tagName = tagName;
  }

  set setId(value) {
    this.id = value;
  }
}

export class CardData {
  recipeId: number;
  recipeName: string;
  creatorId: number;
  createdOn: string;
  creatorUsername: string;
  tags: Tag[];

  constructor(
    recipeId = 1,
    recipeName = "test",
    creatorId = 1,
    createdOn = Date(),
    creatorUsername = "test",
    tags = [new Tag(0, "test")]
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.creatorId = creatorId;
    this.createdOn = createdOn;
    this.creatorUsername = creatorUsername;
    this.tags = tags;
  }
}

export class HomePage extends React.Component<Props, State> {
  state: State = {
    isLoading: true,
    recipes: [] as CardData[],
    pageNumber: 0,
    pages: 0,
  };
  prevPageNumber = -1;

  async componentDidMount() {
    axios
      .get(`http://localhost:8081/api/v1/recipe/page/${this.state.pageNumber}`)
      .then((response) => {
        this.setState((state) => {
          return {
            isLoading: false,
            recipes: response.data.content,
            pages: response.data.totalPages,
          };
        });
      });
  }

  componentDidUpdate() {
    if (this.state.pageNumber !== this.prevPageNumber) {
      axios
        .get(
          `http://localhost:8081/api/v1/recipe/page/${this.state.pageNumber}`
        )
        .then((response) => {
          this.setState((state) => {
            return {
              isLoading: false,
              recipes: response.data.content,
              pages: response.data.totalPages,
            };
          });
        });

      this.state.pageNumber = this.prevPageNumber;
    }
  }

  render() {
    const recipes: CardData[] = [];

    if (this.state.isLoading) {
      return (
        <div>
          <p>Ładowanie strony, proszę czekać</p>.
        </div>
      );
    }

    let uniqueId = 0;
    for (let recipe of this.state.recipes) {
      recipes.push(recipe);
    }
    return (
      <div className="home">
        <RecipeFilters />
        <div className="card-area">
          <div className="card-container">
            {recipes.map((recipe, recipeIdx) => {
              return <FoodCard key={recipeIdx} {...recipe} />;
            })}
          </div>
        </div>
        <div className="footer">
          <Pagination
            count={this.state.pages}
            color="secondary"
            className="pagination"
            onChange={(event, page) => {
              this.setState({ pageNumber: page - 1 });
            }}
          />
        </div>
      </div>
    );
  }
}
