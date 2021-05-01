import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "relative",
      width: "14vw",
      height: "31vh",
      minWidth: "250px",
      minHeight: "260px",
      border: "4px solid #c79100",
      borderRadius: "10px",
    },
    media: {
      position: "relative",
      width: "14vw",
      height: "0vh",
      minWidth: "250px",
      paddingTop: "56.25%", // 16:9
    },
    chipRow: {
      display: "flex",
      width: "14vw",
      height: "1.1vh",
      minWidth: "250px",
      minHeight: "0.5vh",
      flexFlow: "row wrap",
      align: "left",
      justifyContent: "left",
      margin: "0.75vh 0vw 0vh 0.5vw",
      alignItems: "left",
      gap: "0.3vw",
    },
    chip: {
      height: "2.2vh",
      fontFamily: "Roboto Slab",
    },
    title: {
      textAlign: "left",
      color: "#002226",
      fontSize: "20px",
      fontFamily: "Roboto Slab",
      margin: "1.5vh 0vw 0vh 0.6vw",
      width: "250px",
      height: "20px",
      minWidth: "210px",
      minHeight: "10px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "24px",
    },
    titleFavSpan: {
      position: "relative",
      display: "flex",
      verticalAlign: "top",
      width: "14vw",
      height: "2vh",
      minWidth: "250px",
      minHeight: "90px",
    },
    titleFav: {
      position: "relative",
      display: "flex",
      verticalAlign: "top",
      width: "13vw",
      height: "1.35vh",
      minWidth: "220px",
      minHeight: "60px",
    },
    favIcon: {
      textAlign: "left",
      position: "relative",
      align: "left",
      background: "Transparent",
      outline: "none",
      border: "none",
      color: "#c79100",
      width: "24px",
      height: "24px",
      // right: "6px",
      top: "13px",
    },
    author: {
      position: "absolute",
      width: "15vw",
      minWidth: "250px",
      height: "0.5vh",
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
      minWidth: "250px",
      fontWeight: 700,
    },
    stars: {
      position: "relative",
      height: "1vh",
      width: "15vw",
      minWidth: "250px",
      minHeight: "30px",
      borderRadius: "0px",
      display: "flex",
      top: "67px",
      right: "214px",
      color: "#002226",
    },
    reviewNumberText: {
      width: "1vw",
      height: "5vh",
      left: "5vw",
      top: "5vh",
      marginTop: "0.9vh",
      fontFamily: "Roboto Slab",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: "10px",
      lineHeight: "10px",
      letterSpacing: "0.25px",
      color: "#747474",
    },
    buttonDiv: {
      textAlign: "left",
      width: "20px",
      height: "20px",
      position: "relative",
    },
  })
);
