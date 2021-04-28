import React from "react";
import FoodCard from "./FoodCard";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import RecipeFilters from "./RecipeFilters";

interface State {}
interface Props {}

export class HomePage extends React.Component<Props, State> {
  render() {
    return (
      <div className="home-page">

        <RecipeFilters />

        <Grid
          container
          justify="flex-start"
          direction="row"
          style={{ margin: "auto", gap: "30px", width: "61%" }}
        >
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          {/*<FoodCard />*/}
          <FoodCard />
        </Grid>
      </div>
    );
  }
}
