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

interface Props {
  recipeId: number;
}
interface State {
  isLoaded: boolean;
  recipeName: string;
  creatorUsername: string;
  createdOn: string;
  tags: { id: number; tagName: string }[];
  recipeBody: {
    servingQuantity: number;
    timeDescription: string;
    steps: string[];
    ingredients: string[];
  };
}

const RecipeInfo: React.FC<Props> = (props) => {
  const classes = useStyles();
  const [state, setState] = useState<State>({
    isLoaded: false,
    recipeName: "",
    creatorUsername: "",
    createdOn: "",
    tags: [],
    recipeBody: {
      servingQuantity: 0,
      timeDescription: "",
      steps: [],
      ingredients: [],
    },
  });

  function getData() {
    axios.get(`${props.recipeId}`).then((response) => {
      setState(response.data);
      console.log(state.tags);
    });
  }
  useEffect(() => {
    getData();
  }, []);
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
            {state.recipeName}
          </Typography>
        </CardContent>

        <CardContent className={classes.tagsContainer}>
          {state.tags.map((eln, index) => {
            return <Chip label={eln.tagName} />;
          })}
        </CardContent>

        <Box display="flex" justifyContent="space-evenly">
          <h4>Dodano: {state.createdOn.substring(0, 10)}</h4>
          <Divider orientation="vertical" flexItem />
          <h4>Czas: {state.recipeBody.timeDescription} </h4>
          <Divider orientation="vertical" flexItem />
          <h4>Autor: {state.creatorUsername}</h4>
        </Box>
        <Divider variant="middle" />

        <RecipeElement
          title={`Składniki na ${
            state.recipeBody.servingQuantity
          } ${getPortionString(state.recipeBody.servingQuantity)}`}
          textTable={state.recipeBody.ingredients}
          variant={true}
        />
        <Divider variant="middle" />

        <RecipeElement
          title={"Przygotowanie"}
          textTable={state.recipeBody.steps}
          variant={false}
        />
      </Card>
    </Box>
  );
};

export default RecipeInfo;
