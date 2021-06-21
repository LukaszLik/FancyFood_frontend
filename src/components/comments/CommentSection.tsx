import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { AddComment } from "./AddComent";
import { Comments } from "./Comments";
import "./Comments.css";
import AuthService from "../../services/auth";
import CommentService from "../../services/comment";

export const CommentSection = (props) => {
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    CommentService.addComment(content, props.recipeId).then(() => {
      setContent("");
      const readData = () => {
        AuthService.getRecipe(props.recipeId).then(
          (response) => {
            setComment(response.data.recipeBody.comments);
          },
          (error) => {
            console.log(error);
          }
        );
      };
      readData();
    });
  };

  return (
    <Box className="comment-section-container">
      <AddComment
        handleAdd={handleAddComment}
        handelCh={handleChange}
        content={content}
      />
      <Comments comments={comment == "" ? props.comments : comment} />
    </Box>
  );
};
