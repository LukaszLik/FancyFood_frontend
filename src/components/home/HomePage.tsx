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
    descending: false,
  });

  const [page, setPage] = React.useState({
    pageNumber: 0,
    pages: 0,
  });

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const getPages = () => {
      AuthService.getPage(
        page.pageNumber,
        filters.searchedString,
        filters.descending,
        filters.sortBy
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
  }, [page.pageNumber, filters.searchedString, filters.sortBy, filters.descending]);

  const searchBarUpdate = (str) => {
    setFilters({ ...filters, searchedString: str });
  };

  const sortBarUpdate = (str) => {
    const alpha = "name";
    const mark = "marks";
    if (str === "Alfabetycznie rosnąco") {
      setFilters({ ...filters, sortBy: alpha, descending: false });
    }
    else if (str ==="Alfabetycznie malejąco"){
      setFilters({ ...filters, sortBy: alpha, descending: true });
    }
    else if (str === "Ocena rosnąco") {
      setFilters({ ...filters, sortBy: mark, descending: false});
    }else if(str === "Ocena malejąco"){
      setFilters({ ...filters, sortBy: mark, descending: true});
    }
    else {
      setFilters({ ...filters, sortBy: "" });
    }
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
