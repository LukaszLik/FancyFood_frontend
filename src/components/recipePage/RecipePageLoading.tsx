import React from "react";
import "./Recipe.css";
import {
  makeStyles,
  Card,
  Box,
  Typography,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paperStyle: {
    minHeight: "70vh",
    width: "66vw",
    outlineColor: "blue",
    border: "#c79100 4px solid",
    paddingTop: "0.5%",
    paddingBottom: "5vh",
    margin: "5vh 0vh 9vh 0vh",
  },
}));

const RecipePageLoading = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      alignSelf="center"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      style={{ minHeight: "70vh" }}
    >
      <Card className={classes.paperStyle} variant="outlined">
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography variant="h3" className="titleStyle">
            Wczytywanie Danych...
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecipePageLoading;
