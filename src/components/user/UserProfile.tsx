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
                <Typography variant={"h5"} className={classes.typography_h5}>Twój profil</Typography>
            </Grid>
            <Grid container direction={"column"} alignItems={"flex-start"} item>
                <Typography variant={"subtitle1"} className={classes.typography_subtitle}>Email: {props.email} </Typography>
                <Typography variant={"subtitle1"} className={classes.typography_subtitle}>Imię i Nazwisko: {props.username}</Typography>
            </Grid>
        </Grid>
    )}