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
}));

export default function RecipeFilters() {
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
            <h3>Szukaj</h3>
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
            <h3>Filtruj po Tagach</h3>
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
            <h3>Sortuj</h3>
            <FormControl variant="filled" className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Sortuj po</InputLabel>
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
