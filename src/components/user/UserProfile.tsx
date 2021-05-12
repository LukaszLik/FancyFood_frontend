import React from "react";
import {Box, Grid, Typography} from "@material-ui/core";

interface Props  {
    email: string;
    username:string;
}


export const UserProfile: React.FC<Props> = props => {
    return (
        <Grid container alignItems={"flex-start"} direction={"column"} spacing={2} style={{padding:"0vh 0vw 5vh 0vw"}}>
            <Grid item xs={3} >
                <Typography variant={"h5"}>Twój profil:</Typography>
            </Grid>
            <Grid container direction={"column"} alignItems={"flex-start"} item>
                <Typography variant={"subtitle1"}>Email:{props.email} </Typography>
                <Typography variant={"subtitle1"}>Imię i Nazwisko:{props.username}</Typography>
            </Grid>
        </Grid>
    )
}