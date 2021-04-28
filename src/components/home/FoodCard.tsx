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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 250,
      maxHeight: 260,
      border: "3px solid #c79100",
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
      fontFamily: "Times New Roman",
      // fontWeight: 'bold',
      // marginLeft: '5px',
    },

    title: {
      textAlign: "left",
      color: "#002226",
      fontSize: 20,
      fontWeight: "bold",
      fontFamily: "Times New Roman",
      margin: "-5px -20px 0px -6px",
      maxWidth: "200px",
    },

    titleFavSpan: {
      display: "flex",
      // flexFlow: 'row wrap',
      align: "left",
      justifyContent: "left",
      alignItems: "left",
      gap: "8px",
      padding: "0px 0px 0px 0px",
    },

    favIcon: {
      color: "#c79100",
      // maxWidth: '20px',
    },
  })
);

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://www.jadlonomia.com/wp-content/uploads/2016/05/IMG_1090-copy-600x900.jpg"
        title="Paella dish"
      />
      <span className={classes.chipRow}>
        <Chip className={classes.chip} label="Basic" />
        <Chip className={classes.chip} label="Placeholder" />
      </span>

      <span className={classes.titleFavSpan}>
        <CardHeader
          classes={{
            title: classes.title,
          }}
          title="Penne z bakłażanem"
        />

        <IconButton aria-label="add to favorites">
          <FavoriteBorderIcon className={classes.favIcon} />
        </IconButton>
      </span>

      <CardActions disableSpacing></CardActions>
    </Card>
  );
}
