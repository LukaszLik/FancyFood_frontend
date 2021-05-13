import React from "react";
import {
    makeStyles,
    Card,
    CardContent,
    Typography,
    Grid, CardMedia, Chip,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        minHeight: "70vh",
        width: "65vw",
        outlineColor: "blue",
        border: "#c79100 4px solid",
        paddingTop: "0.5%",
        margin: "5vh 0vh 5vh 0vh",

    },
    titleStyle: {
        fontWeight: 500,
    },
    media: {
        height: "35vh",
    },
    root: {
        display: 'flex',
        marginLeft: 80,
        //justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const RecipeInfo = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            alignItems="center"
            direction="column"
            justify="center"
            style={{ minHeight: "90vh" }}
        >
            <Card className={classes.paperStyle} variant="outlined">
                <CardMedia
                    className={classes.media}
                    image=""
                />
                <CardContent style={{ paddingBottom: "0px" }}>
                    <Typography variant="h3" className={classes.titleStyle}>
                        TYTUŁ
                    </Typography>
                </CardContent>

                <CardContent className={classes.root}>
                    <Chip label="Basic" />
                    <Chip label="Basic" />
                    <Chip label="Basic" />
                </CardContent>

                <CardContent className={classes.root}>
                    <h5>Dodano</h5>
                    <h5>Czas</h5>
                    <h5>Autor</h5>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default RecipeInfo;
