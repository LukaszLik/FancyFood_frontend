import React from 'react';
import { makeStyles, withStyles} from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';

import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    mainBox: {
        backgroundColor: "#EDEDED",
    },
    searchBox: {
        backgroundColor: "#DFDEDE",
        border: "1px"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },

}));



export default function RecipeFilters() {
    const classes = useStyles();
    const [sort, setSort] = React.useState('');

    const handleChange = (event) => {
        setSort(event.target.value); }

    return (
            <div className={classes.mainBox}>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item><h3>Szukaj Przepisu</h3></Grid>
                    <Grid item><h3>Filtruj po Tagach</h3></Grid>
                    <Grid item><h3>Sortuj</h3></Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="flex-start"
                >
                    <Grid item>
                        <Grid container spacing={1} alignItems="flex-end" >
                            <Grid item>
                                <SearchIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="recipe-name-search" label="Szukaj" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item >
                            <TextField id="recipe-tag-search" label="Tagi" />
                    </Grid>
                    <Grid item>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Sortuj po</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={sort}
                                onChange={handleChange}
                            >
                                <MenuItem value="" />
                                <MenuItem value={"Popularność"}>Popularność</MenuItem>
                                <MenuItem value={"Ocena"}>Ocena</MenuItem>
                                <MenuItem value={"Alfabetycznie"}>Alfabetycznie</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>

            </div>
    );
}
