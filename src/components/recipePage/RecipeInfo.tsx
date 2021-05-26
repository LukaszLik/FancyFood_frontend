import React from "react";
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

const StyledRating = withStyles({
  iconFilled: {
    color: "#002226",
  },
})(Rating);

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    minHeight: "70vh",
    width: "66vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
    paddingBottom: "5vh",
    margin: "5vh 0vh 5vh 0vh",
  },
  tagsAndRatingContainer: {
    display: "flex",
    marginLeft: "6vw",
    marginRight: "6vw",
    flexWrap: "wrap",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  tagsContainer: {
    display: "flex",
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
  const classes = useStyles();
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
        <CardMedia
          className="image"
          image="https://www.jadlonomia.com/wp-content/uploads/2016/05/IMG_1090-copy-600x900.jpg"
        />
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
                  style={{ marginRight: "10px" }}
                />
              );
            })}
          </div>
          <StyledRating name="half-rating" defaultValue={2.5} precision={0.5} onClick={(e) => ratingsHandler(props.data.recipeId, e)}/>
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
      </Card>
    </Box>
  );
};

export default RecipeInfo;
