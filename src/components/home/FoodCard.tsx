import React from "react";
import {
  Card,
  Chip,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarBorderSharpIcon from "@material-ui/icons/StarBorderSharp";
import StarSharpIcon from "@material-ui/icons/StarSharp";
import StarHalfSharpIcon from "@material-ui/icons/StarHalfSharp";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "250px",
      height: "260px",
      border: "4px solid #c79100",
      borderRadius: "10px",
    },
    media: {
      maxWidth: 250,
      maxHeight: 125,
      paddingTop: "56.25%", // 16:9
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    chipRow: {
      display: "flex",
      width: 250,
      maxHeight: "20px",
      flexFlow: "row wrap",
      align: "left",
      justifyContent: "left",
      margin: "11px 0px 0px 8px",
      alignItems: "left",
      gap: "8px",
      padding: "0px 0px 0px 0px",
    },
    chip: {
      maxHeight: "20px",
      fontFamily: "Roboto Slab",
      marginTop: "-6px",
    },
    title: {
      textAlign: "left",
      color: "#002226",
      fontSize: "20px",
      fontFamily: "Roboto Slab",
      margin: "-10px 0px 0px -6px",
      width: 229,
      maxHeight: 64,
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "24px",
    },

    titleFavSpan: {
      display: "block",
      verticalAlign: "top",
      width: 229,
      height: 64,
    },

    favIcon: {
      color: "#c79100",
      width: "20px",
      height: "18.35px",
      position: "absolute",
      left: "87%",
      right: "0%",
      top: "67%",
      bottom: "0",
    },

    author: {
      position: "absolute",
      width: "200px",
      height: "33px",
      textAlign: "left",
      margin: "0px 0px 0px 10px",
      fontFamily: "Roboto Slab",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "24px",
      /* or 200% */
      color: "#002226",
      top: "87%",
    },

    authorName: {
      fontWeight: 700,
    },

    stars: {
      position: "absolute",
      height: "20px",
      width: "20px",
      borderRadius: "0px",
      display: "flex",
      right: "89.4%",
      top: "84.6%",
      color: "#002226",
    },
  })
);

interface State {
  addedToFavourites: boolean;
}

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [state, setState] = React.useState<State>({
    addedToFavourites: false,
  });

  const handleFavourites = (e) => {
    setState({
      addedToFavourites: !state.addedToFavourites,
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
        <Chip className={classes.chip} label="Basic" />
        <Chip className={classes.chip} label="Placeholder" />
      </span>

      <div className={classes.titleFavSpan} id="text-likes-favourites">
        <CardHeader
          classes={{
            title: classes.title,
          }}
          title="Penne z bakłażanem"
          // title="Pomidorowa z kalafiorowym ryżem"
        />

        <span className={classes.stars} id="stars">
          <StarSharpIcon />
          <StarHalfSharpIcon />
          <StarBorderSharpIcon />
          <StarBorderSharpIcon />
          <StarBorderSharpIcon />
        </span>
      </div>

      <div className={classes.author} id="author">
        <p>
          Autor: <span className={classes.authorName}>M.Dymek</span>
        </p>
      </div>

      <CardActions disableSpacing>
        <IconButton
          onClick={handleFavourites}
          className={classes.favIcon}
          aria-label="add to favorites"
        >
          {state.addedToFavourites ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}
