import React, { useEffect } from "react";
import FoodCard from "./FoodCard";
import RecipeFilters from "./RecipeFilters";
import "./HomePage.css";
import Pagination from "@material-ui/lab/Pagination";
import AuthService from "../../services/auth";

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
    recipes: [] as CardData[],
  });

  const [filters, setFilters] = React.useState({
    searchedString: "",
    sortBy: "",
    onlyFavorites: false,
  });

  const [page, setPage] = React.useState({
    pageNumber: 0,
    pages: 0,
  });

  const [favorites, setFavorites] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getPages = () => {
      AuthService.getPage(
        page.pageNumber,
        filters.searchedString,
        false,
        filters.sortBy,
        favorites
      ).then((response) => {
        setState({
          ...state,
          recipes: response.data.content,
        });

        setPage({ ...page, pages: response.data.totalPages });

        setLoading(false);
      });
    };

    getPages();
  }, [page.pageNumber, filters.searchedString, filters.sortBy, favorites]);

  const searchBarUpdate = (str) => {
    setFilters({ ...filters, searchedString: str });
  };

  const sortBarUpdate = (str) => {
    const alpha = "name";
    const mark = "marks";
    if (str === "Alfabetycznie") {
      setFilters({ ...filters, sortBy: alpha });
    } else if (str === "Ocena") {
      setFilters({ ...filters, sortBy: mark });
    } else {
      setFilters({ ...filters, sortBy: "" });
    }
  };

  const favoritesUpdate = (str) => {
    console.log(str);
    setFavorites(str);
  };

  const recipes: CardData[] = [];

  for (let recipe of state.recipes) {
    recipes.push(recipe);
  }

  return loading ? (
    <div>
      <p>Ładowanie strony, proszę czekać</p>
    </div>
  ) : (
    <div className="home">
      <RecipeFilters
        searchHandler={searchBarUpdate}
        sortHandler={sortBarUpdate}
        favoritesHandler={favoritesUpdate}
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
          count={page.pages}
          color="secondary"
          className="pagination"
          onChange={(event, pageNr) => {
            setPage({ ...page, pageNumber: pageNr - 1 });
          }}
        />
      </div>
    </div>
  );
}
