import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { AddComment } from "./AddComent";
import { Comments } from "./Comments";
import "./Comments.css";
import AuthService from "../../services/auth";
import CommentService from "../../services/comment";
import { useSnackbar } from "notistack";

export const CommentSection = (props) => {
  const [content, setContent] = useState("");
  const [comment, setComment] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    CommentService.addComment(content, props.recipeId).then(() => {
      setContent("");
      enqueueSnackbar("Dodano komentarz!");
      const readData = () => {
        AuthService.getRecipe(props.recipeId).then(
          (response) => {
            setComment(response.data.recipeBody.comments);
          },
          (error) => {
            enqueueSnackbar("Dodawanie komentarza się nie powiodło.");
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
        handleChange={handleChange}
        content={content}
      />
      <Comments comments={comment == "" ? props.comments : comment} />
    </Box>
  );
};
