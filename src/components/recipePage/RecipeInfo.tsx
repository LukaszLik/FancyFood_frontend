import React, { useEffect, useState } from "react";
import "./Recipe.css";
import RecipeElement from "./RecipeElement";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  CardMedia,
  Chip,
  Box,
  Divider,
} from "@material-ui/core";
import axios from "axios";

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
  tagsContainer: {
    display: "flex",
    marginLeft: "6vw",
    marginRight: "6vw",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function getPortionString(portionCount) {
  if (portionCount == 1) {
    return "porcję";
  } else if (portionCount > 1 && portionCount < 5) {
    return "porcje";
  } else {
    return "porcji";
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
        {
          //TODO ADD IMAGE!
        }
        <CardMedia className="image" image="" />
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h3" className="titleStyle">
            {props.data.recipeName}
          </Typography>
        </CardContent>
        <CardContent className={classes.tagsContainer}>
          {props.data.tags.map((eln, index) => {
            return <Chip label={eln.tagName} />;
          })}
        </CardContent>

        <Box display="flex" justifyContent="space-evenly">
          <h4>Dodano: {props.data.createdOn.substring(0, 10)}</h4>
          <Divider orientation="vertical" flexItem />
          <h4>Czas: {props.data.recipeBody.timeDescription} </h4>
          <Divider orientation="vertical" flexItem />
          <h4>Autor: {props.data.creatorUsername}</h4>
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
