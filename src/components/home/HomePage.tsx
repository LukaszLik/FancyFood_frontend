import React from "react";
import FoodCard from "./FoodCard";
import RecipeFilters from "./RecipeFilters";
import "./HomePage.css";
import Pagination from "@material-ui/lab/Pagination";
import AuthService from "../../services/auth";

interface State {
  isLoading: boolean;
  recipes: CardData[];
  pageNumber: number;
  pages;
  isSearching: boolean;
  searchedString: string;
  prevSearchedString: string;
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
    isSearching: false,
    searchedString: "",
    prevSearchedString: "",
  };

  prevPageNumber = -1;

  async componentDidMount() {
    AuthService.getRecipePages(this.state.pageNumber).then(
      (response) => {
        this.setState((state) => {
          return {
            isLoading: false,
            recipes: response.data.content,
            pages: response.data.totalPages,
          };
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  componentDidUpdate() {
    if (!this.state.isSearching) {
      if (this.state.pageNumber !== this.prevPageNumber) {
        AuthService.getRecipePages(this.state.pageNumber).then(
          (response) => {
            this.setState((state) => {
              return {
                isLoading: false,
                recipes: response.data.content,
                pages: response.data.totalPages,
              };
            });
          },
          (error) => {
            console.log(error);
          }
        );

        this.prevPageNumber = this.state.pageNumber;
      }
    } else {
      if (
        this.state.searchedString !== this.state.prevSearchedString ||
        this.state.pageNumber !== this.prevPageNumber
      ) {
        AuthService.getRecipePageCombo(
          this.state.pageNumber,
          this.state.searchedString,
          false,
          ""
        ).then(
          (response) => {
            this.setState((state) => {
              return {
                isLoading: false,
                recipes: response.data.content,
                pages: response.data.totalPages,
              };
            });
          },
          (error) => {
            console.log(error);
          }
        );

        this.prevPageNumber = this.state.pageNumber;
        this.setState({
          ...this.state,
          prevSearchedString: this.state.searchedString,
        });

        if (this.state.searchedString === "") {
          this.setState({ ...this.state, isSearching: false });
        }
      }
    }
  }

  searchBarUpdate = (str) => {
    this.setState({ ...this.state, searchedString: str, isSearching: true });
  };

  render() {
    const recipes: CardData[] = [];

    if (this.state.isLoading) {
      return (
        <div>
          <p>Ładowanie strony, proszę czekać</p>
        </div>
      );
    }

    for (let recipe of this.state.recipes) {
      recipes.push(recipe);
    }

    return (
      <div className="home">
        <RecipeFilters handler={this.searchBarUpdate} />
        <div className="card-area">
          <div className="card-container">
            {recipes.map((recipe) => {
              return <FoodCard key={recipe.recipeId} {...recipe} />;
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
