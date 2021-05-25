import React from "react";
import {
  makeStyles,
  InputLabel,
  FormControl,
  TextField,
  Grid,
  MenuItem,
  Select,
  InputAdornment,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface State {
  search: string;
  tags: string;
  sort: string;
}

const useStyles = makeStyles((theme) => ({
  mainBox: {
    backgroundColor: "#EDEDED",
    margin: "0px 0px 30px 0px",
    minHeight: "130px",
  },
  searchElement: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  formControl: {
    minWidth: 200,
  },
  text: {
    textAlign: "left",
    width: "218px",
    height: "20px",
    left: "30px",
    top: "90px",

    fontFamily: "Roboto Slab",
    fontWeight: 700,
    fontSize: "18px",
    lineHeight: "16px",
    /* or 89% */

    letterSpacing: "1.25px",
    color: "#002226",
  },
}));

export default function RecipeFilters( {handler} ) {
  const classes = useStyles();
  const [state, setState] = React.useState<State>({
    search: "",
    tags: "",
    sort: "",
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [prop]: event.target.value });
    console.log(state.search);
    // searchString = event.target.value;
    // console.log("sercz string: " + searchString);
    handler(event.target.value);
  };

  const handleChangeSelect = (event) => {
    setState({ ...state, sort: event.target.value });
  };

  return (
    <div className={classes.mainBox}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
      >
        <Grid item>
          <div className={classes.searchElement}>
            <p className={classes.text}>Szukaj przepisu</p>
            <TextField
              id="input-search-by-name"
              type="text"
              label="Szukaj"
              variant="filled"
              value={state.search}
              onChange={handleChange("search")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.searchElement}>
            <p className={classes.text}>Filtruj po tagach</p>
            <TextField
              id="recipe-tag-search"
              label="Tagi"
              variant="filled"
              value={state.tags}
              onChange={handleChange("tags")}
            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.searchElement}>
            <p className={classes.text}>Sortuj po</p>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Sortuj</InputLabel>
              <Select value={state.sort} onChange={handleChangeSelect}>
                <MenuItem value={""} />
                <MenuItem value={"Popularność"}>Popularność</MenuItem>
                <MenuItem value={"Ocena"}>Ocena</MenuItem>
                <MenuItem value={"Alfabetycznie"}>Alfabetycznie</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
