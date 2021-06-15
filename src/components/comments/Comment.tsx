import React from "react";
import {Card, CardContent, CardHeader, Typography} from "@material-ui/core";
import "./Comments.css"

interface Props {
    content: string,
    creatorUsername: string,
    createdOn: string
}

export const Comment: React.FC<Props> = props => {
    return (
        <Card variant="outlined">
            <CardContent style={{}}>
                <span className="comment-container-head">
                    <Typography variant="h5" className="typography typography-h5" style={{ color:"#0095A8", fontSize:18}}>{props.creatorUsername}</Typography>
                    <Typography variant="h5" className="typography typography-h5" style={{ color:"#747474", fontSize:14}}>{props.createdOn.substring(0,10)}</Typography>
                </span>

                <Typography variant="body1" className="typography" style={{textAlign: "justify", fontWeight:400, fontSize:14}}>
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    )
}