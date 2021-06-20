import React, { useState } from "react";
import "./Recipe.css";
import RecipeElement from "./RecipeElement";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  makeStyles,
  Typography,
  withStyles,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import UserRecipeService from "../../services/userRecipes";
import AuthService from "../../services/auth";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import axios from "axios";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { CommentSection } from "../comments/CommentSection";
import UserRecipesService from "../../services/userRecipes";
import {
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from "@material-ui/icons";

const StyledRating = withStyles({
  iconFilled: {
    color: "#002226",
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    minHeight: "70vh",
    width: "55vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingBottom: "5vh",
    margin: "5vh 0vh 5vh 0vh",
  },
  tagsAndRatingContainer: {
    display: "grid",
    marginLeft: "4%",
    gap: "1%",
    gridTemplateColumns: "36% 30% 24%",
    marginRight: "4%",
    flexWrap: "wrap",
    justifyContent: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  largeIcon: {
    width: 40,
    height: 40,
    marginRight: "5%",
  },
}));

function getPortionString(portionCount) {
  if (portionCount === 1) {
    return "porcję";
  } else if (portionCount > 1 && portionCount < 5) {
    return "porcje";
  } else {
    return "porcji";
  }
}

function ratingsHandler(recipeId, e) {
  const mark = e.target.value;
  if (mark) {
    UserRecipeService.rateRecipe(recipeId, mark);
  }
}

const RecipeInfo = (props) => {
  const history = useHistory();
  const classes = useStyles();

  const [favoriteStare, setFavoriteStare] = useState({
    addedToFavorites: props.data.favorite,
  });

  const getImage = (id: number) => {
    return `photo/${id}`;
  };

  const handleFavourites = () => {
    setFavoriteStare({
      addedToFavorites: !favoriteStare.addedToFavorites,
    });

    if (favoriteStare.addedToFavorites) {
      UserRecipesService.removeFavorite(props.data.recipeId);
    } else {
      UserRecipesService.addFavorite(props.data.recipeId);
    }
  };

  const downloadPdfHandle = (id: number) => {
    axios({
      url: `http://localhost:8081/export/${id}`,
      method: "GET",
      responseType: "blob",
    }).then((response) => {
      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    });
  };

  const editRecipeHandle = (id: number) => {
    history.push(`../editrecipe/${id}`);
  };

  return (
    <Box
      display="flex"
      alignSelf="center"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      style={{ minHeight: "90vh" }}
    >
      <Card className={classes.paperStyle} variant="outlined">
        <CardMedia className="image" image={getImage(props.data.recipeId)} />
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h3" className="titleStyle">
            {props.data.recipeName}
          </Typography>
        </CardContent>
        <CardContent className={classes.tagsAndRatingContainer}>
          <div className={classes.tagsContainer}>
            {props.data.tags.map((eln, index) => {
              return (
                <Chip
                  className="text"
                  key={index}
                  label={eln.tagName}
                  style={{ margin: "0px 5px 2px 0" }}
                />
              );
            })}
          </div>

          {AuthService.getUser() !== null ? (
            <StyledRating
              name="half-rating"
              defaultValue={props.data.marks.average}
              precision={0.5}
              onClick={(e) => ratingsHandler(props.data.recipeId, e)}
            />
          ) : (
            <StyledRating
              name="read-only"
              precision={0.5}
              value={props.data.marks.average}
              readOnly
            />
          )}

          <span>
            {AuthService.getUser() ? (
              <button
                type="button"
                className={"favoriteButton"}
                onClick={handleFavourites}
                aria-label="add to favorites"
              >
                {favoriteStare.addedToFavorites ? (
                  <FavoriteIcon className={classes.largeIcon} />
                ) : (
                  <FavoriteBorderIcon className={classes.largeIcon} />
                )}
              </button>
            ) : null}

            <PictureAsPdfIcon
              className={classes.largeIcon}
              onClick={() => downloadPdfHandle(props.data.recipeId)}
            />

            {props.data.creatorUsername === AuthService.getUser() ? (
              <EditIcon
                className={classes.largeIcon}
                onClick={() => editRecipeHandle(props.data.recipeId)}
              />
            ) : null}
          </span>
        </CardContent>

        <Box display="flex" justifyContent="space-evenly">
          <h4 className="text">
            Dodano: {props.data.createdOn.substring(0, 10)}
          </h4>
          <Divider orientation="vertical" flexItem />
          <h4 className="text">
            Czas: {props.data.recipeBody.timeDescription}{" "}
          </h4>
          <Divider orientation="vertical" flexItem />
          <h4 className="text">Autor: {props.data.creatorUsername}</h4>
        </Box>
        <Divider variant="middle" />

        <RecipeElement
          title={`Składniki na ${
            props.data.recipeBody.servingQuantity
          } ${getPortionString(props.data.recipeBody.servingQuantity)}`}
          textTable={props.data.recipeBody.ingredients}
          variant={true}
        />
        <Divider variant="middle" />

        <RecipeElement
          title={"Przygotowanie"}
          textTable={props.data.recipeBody.steps}
          variant={false}
        />
        <Divider variant="middle" />
        <CommentSection
          comments={props.data.recipeBody.comments}
          recipeId={props.data.recipeId}
        />
      </Card>
    </Box>
  );
};

export default RecipeInfo;
