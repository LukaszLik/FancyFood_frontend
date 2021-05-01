import React from "react";
import {
  Card,
  Chip,
  CardHeader,
  CardMedia,
  CardActions,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import StarHalfSharpIcon from "@material-ui/icons/StarHalfSharp";

import { CardData } from "./HomePage";
import { styles } from "./FoodCardStyles";

import "./HomePage.css";

interface State {
  addedToFavourites: boolean;
  recipe: CardData;
}

export default function RecipeReviewCard(props) {
  // let props = CardData();
  const classes = styles();
  const [state, setState] = React.useState<State>({
    addedToFavourites: false,
    recipe: new CardData(),
  });

  const handleFavourites = (e) => {
    setState({
      addedToFavourites: !state.addedToFavourites,
      recipe: new CardData(),
    });
    console.log("added to favourites");
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.jadlonomia.com/wp-content/uploads/2016/05/IMG_1090-copy-600x900.jpg"
      />

      <span className={classes.chipRow}>
        <Chip className={classes.chip} label={props.category} />
        <Chip className={classes.chip} label="Placeholder" />
      </span>

      <span className={classes.titleFavSpan} id="text-likes-favourites">
        <span className={classes.titleFav}>
          <p className={classes.title}>{props.recipeName}</p>
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

      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
