import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  mainContainer: {
    alignItems: "center",
    minHeight: "90vh",
    minWidth: "90vw",
    padding: "5vh 0vw 5vh 0vw",
  },

  mainCard: {
    borderColor: "#c79100",
    borderStyle: "solid",
    borderWidth: "4px",
    borderRadius: "10px",
    minHeight: "90vh",
    minWidth: "90vw",
  },

  cardContent: {
    padding: "5vh 5vw 0vh 3vw",
  },
});

export default useStyles;
