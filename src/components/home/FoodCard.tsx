import React from "react";
import { Card, Chip, CardMedia, withStyles, Box } from "@material-ui/core";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";
import Rating from "@material-ui/lab/Rating";
import { CardData } from "./HomePage";
import { styles } from "./FoodCardStyles";
import "./HomePage.css";
import { useHistory } from "react-router-dom";

interface State {
  addedToFavourites: boolean;
  recipe: CardData;
}

const StyledRating = withStyles({
  iconFilled: {
    color: "#002226",
  },
})(Rating);

export default function RecipeReviewCard(props) {
  const history = useHistory();
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

  const recipePageHandler = (id: Number) => {
    history.push(`/recipe/${id}`);
  };

  const getImage = (id: number) => {
    return `recipe/photo/${id}`;
  };

  const maxChips = 3;
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={getImage(props.recipeId)}
        onClick={() => recipePageHandler(props.recipeId)}
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
          <Box component="fieldset" mb={3} borderColor="transparent">
            <StyledRating name="read-only" precision={0.5} value={props.marks.average} readOnly />{" "}
          </Box>
          <p className={classes.reviewNumberText}>{props.marks.numberOfmarks}</p>
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
