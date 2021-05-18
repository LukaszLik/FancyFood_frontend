import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";
import "./styles/UserProfile"
import useStyles from "./styles/UserProfile";

interface Props  {
    email: string;
    username:string;
}


export const UserProfile: React.FC<Props> = props => {
    const classes = useStyles()

    return (<Grid container alignItems={"flex-start"} direction={"column"} spacing={2} className={classes.mainContainer}>
            <Grid item xs={3} >
                <h2 className={classes.typography_h5}>Wołowina w pieczarkach:</h2>
            </Grid>
            <Grid container direction={"column"} alignItems={"flex-start"} item>
                <Typography variant={"subtitle1"}>Email:{props.email} </Typography>
                <Typography variant={"subtitle1"}>Imię i Nazwisko:{props.username}</Typography>
            </Grid>
        </Grid>
    )}