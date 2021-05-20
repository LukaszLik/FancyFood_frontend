import React from "react";
import {Box, Card, CardContent, Divider, Grid, Typography} from "@material-ui/core";
import {UserProfile} from "./UserProfile";
import {UserRecipe} from "./UserRecipe";
import "./styles/UserPage"
import useStyles from "./styles/UserPage";

interface State {
    email: string
    username: string
}

export const UserPage: React.FC = props => {
    const classes = useStyles()

    return (
        <div>
            <Grid container justify={"center"} className={classes.mainContainer}>
                <Card className={classes.mainCard} variant={"outlined"}>
                    <CardContent className={classes.cardContent}>
                        <Box>
                        <UserProfile />
                        </Box>
                        <Divider />
                        <Box>
                        <Grid container>
                        <UserRecipe/>
                        </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

