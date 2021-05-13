import React from "react";
import "./Recipe.css";
import RecipeElement from "./RecipeElement";
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
  CardMedia,
  Chip,
  Box,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    minHeight: "70vh",
    width: "66vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
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

const RecipeInfo = () => {
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
        <CardMedia className="image" image="" />
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h3" className="titleStyle">
            TYTUŁ
          </Typography>
        </CardContent>

        <CardContent className={classes.tagsContainer}>
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
          <Chip label="Basic" />
        </CardContent>

        <Box display="flex" justifyContent="space-evenly">
          <h5>Dodano:</h5>
          <Divider orientation="vertical" flexItem />
          <h5>Czas:</h5>
          <Divider orientation="vertical" flexItem />
          <h5>Autor:</h5>
        </Box>
        <Divider variant="middle" />

        <RecipeElement
          title={"Składniki na 8 " + getPortionString(8)}
          text={"test test test"}
        />

        <Divider variant="middle" />

        <RecipeElement title={"Przygotowanie"} text={"test test test"} />
      </Card>
    </Box>
  );
};

export default RecipeInfo;
