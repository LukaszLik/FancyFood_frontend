import React from "react";
import {Box, Divider} from "@material-ui/core";
import {AddComment} from "./AddComent";
import {Comments} from "./Comments";

export const CommentSection = props => {
    return (
        <Box style={{padding: "0vh 1vw 0vh 1vw", marginTop: "2vh", display: "flex", flexDirection: "column", gap:"30px"}}>
            <AddComment recipeId={props.recipeId}/>
            <Divider variant="middle"/>
            <Comments comments={props.comments}/>
        </Box>
    )
}