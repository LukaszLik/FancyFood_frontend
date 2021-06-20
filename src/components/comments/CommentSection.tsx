import React from "react";
import { Box } from "@material-ui/core";
import { AddComment } from "./AddComent";
import { Comments } from "./Comments";
import "./Comments.css";

export const CommentSection = (props) => {
  return (
    <Box className="comment-section-container">
      <AddComment recipeId={props.recipeId} />
      <Comments comments={props.comments} />
    </Box>
  );
};
