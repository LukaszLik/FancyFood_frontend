import React from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";

interface Props {
    content: string,
    creatorUsername: string,
    created: string
}

export const Comment: React.FC<Props> = props => {
    return (
        <Card variant="outlined">
            <CardContent>
                <span style={{display: "flex", justifyContent:"space-between"}}>
                    <Typography>{props.creatorUsername}</Typography>
                    <Typography>{props.created}</Typography>
                </span>

                <Typography variant="subtitle2" style={{textAlign: "left"}}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    )
}