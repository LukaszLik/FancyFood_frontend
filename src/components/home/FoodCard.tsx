import React from "react";
import { Card, Chip, CardMedia } from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
  StarBorderSharp as StarBorderSharpIcon,
  StarSharp as StarSharpIcon,
  StarHalfSharp as StarHalfSharpIcon,
} from "@material-ui/icons";

import { CardData } from "./HomePage";
import { styles } from "./FoodCardStyles";
import "./HomePage.css";

interface State {
  addedToFavourites: boolean;
  recipe: CardData;
}

export default function RecipeReviewCard(props) {
  const classes = styles();
  const [state, setState] = React.useState<State>({
    addedToFavourites: false,
    recipe: new CardData(),
  });

  const handleFavourites = () => {
    setState({
      addedToFavourites: !state.addedToFavourites,
      recipe: new CardData(),
    });
  };

  let maxChips = 3;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.jadlonomia.com/wp-content/uploads/2016/05/IMG_1090-copy-600x900.jpg"
      />

      <span className={classes.chipRow}>
        {props.tags.map((tag, id) => {
          return id < maxChips ? (
            <Chip key={tag.id} className={classes.chip} label={tag.tagName} />
          ) : (
            <div key={tag.id}></div>
          );
        })}
      </span>

      <span className={classes.titleFavSpan} id="text-likes-favourites">
        <span className={classes.titleFav}>
          <div className="titleText">{props.recipeName}</div>
          <span className={classes.buttonDiv}>
            <button
              type="button"
              onClick={handleFavourites}
              className={classes.favIcon}
              aria-label="add to favorites"
            >
              {state.addedToFavourites ? (
                <FavoriteIcon />
              ) : (
                <FavoriteBorderIcon />
              )}
            </button>
          </span>
        </span>

        <span className={classes.stars} id="stars">
          <StarSharpIcon />
          <StarHalfSharpIcon />
          <StarBorderSharpIcon />
          <StarBorderSharpIcon />
          <StarBorderSharpIcon />
          <p className={classes.reviewNumberText}>{props.recipeId}</p>
        </span>
      </span>

      <div className={classes.author} id="author">
        <p>
          Autor:{" "}
          <span className={classes.authorName}>{props.creatorUsername}</span>
        </p>
      </div>
    </Card>
  );
}
