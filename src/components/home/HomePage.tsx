import React, { useEffect } from "react";
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
  searchedString: string;
  prevSearchedString: string;
  sortBy: string;
  prevSortBy: string;
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
  favorite: boolean;
  tags: Tag[];

  constructor(
    recipeId = 1,
    recipeName = "test",
    creatorId = 1,
    createdOn = Date(),
    creatorUsername = "test",
    favorite = false,
    tags = [new Tag(0, "test")]
  ) {
    this.recipeId = recipeId;
    this.recipeName = recipeName;
    this.creatorId = creatorId;
    this.createdOn = createdOn;
    this.creatorUsername = creatorUsername;
    this.favorite = favorite;
    this.tags = tags;
  }
}

export default function HomePage() {
  const [state, setState] = React.useState({
    isLoading: true,
    recipes: [] as CardData[],
    pageNumber: 0,
    pages: 0,
    searchedString: "",
    prevSearchedString: "",
    sortBy: "",
    prevSortBy: "",
  });

  let prevPageNumber = -1;

  useEffect(() => {
    const getPages = () => {
      if (
        state.searchedString !== state.prevSearchedString ||
        state.pageNumber !== prevPageNumber ||
        state.sortBy !== state.prevSortBy
      ) {
        AuthService.getPage(
          state.pageNumber,
          state.searchedString,
          false,
          state.sortBy
        ).then(
          (response) => {
            setState({
              ...state,
              isLoading: false,
              recipes: response.data.content,
              pages: response.data.totalPages,
            });
          },
          (error) => {
            console.log(error);
          }
        );

        prevPageNumber = state.pageNumber;
        setState({
          ...state,
          prevSearchedString: state.searchedString,
          prevSortBy: state.sortBy,
        });
      }
    };

    getPages();
  }, [state.pageNumber, state.searchedString, state.sortBy]);

  const searchBarUpdate = (str) => {
    setState({ ...state, searchedString: str });
  };

  const sortBarUpdate = (str) => {
    const alpha = "name";
    const mark = "mark";
    if (str === "Alfabetycznie") {
      setState({ ...state, sortBy: alpha });
    } else if (str === "Ocena") {
      setState({ ...state, sortBy: mark });
    } else {
      setState({ ...state, sortBy: "" });
    }
  };

  const recipes: CardData[] = [];

  for (let recipe of state.recipes) {
    recipes.push(recipe);
  }

  return state.isLoading ? (
    <div>
      <p>Ładowanie strony, proszę czekać</p>
    </div>
  ) : (
    <div className="home">
      <RecipeFilters
        searchHandler={searchBarUpdate}
        sortHandler={sortBarUpdate}
      />
      <div className="card-area">
        <div className="card-container">
          {recipes.map((recipe) => {
            return <FoodCard key={recipe.recipeId} {...recipe} />;
          })}
        </div>
      </div>
      <div className="footer">
        <Pagination
          count={state.pages}
          color="secondary"
          className="pagination"
          onChange={(event, page) => {
            setState({ ...state, pageNumber: page - 1 });
          }}
        />
      </div>
    </div>
  );
}
