import React from "react";
import {Box, Card, CardContent, Divider, Grid, Typography} from "@material-ui/core";
import {UserProfile} from "./UserProfile";

interface State {
    email: string
    username: string
}

export const UserPage: React.FC = props => {
    const [state, setState] = React.useState<State>({
        email: "admin@admin.com",
        username: "Mariusz Dymek"
        }
    )
    return (
        <div>
            <Grid
                container
                alignItems="center"
                justify={"center"}
                style={{minHeight: "90vh"}}
            >
                <Card style={{minHeight: "80vh", minWidth: "90vw"}}>
                    <CardContent style={{padding:"5vh 5vw 0vh 3vw"}}>
                        <Box>
                        <UserProfile email={state.email} username={state.username}/>
                        </Box>
                        <Divider />
                        <Box>
                        <Grid container>
                        <Typography variant={"h5"}>Twoje przepisy:</Typography>
                        </Grid>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

