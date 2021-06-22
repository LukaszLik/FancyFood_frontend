import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import CommentService from "../../services/comment";
import "./Comments.css";
import { useSnackbar } from "notistack";

export const AddComment = (props) => {
  const [content, setContent] = useState("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setContent(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    CommentService.addComment(content, props.recipeId).then(
      () => {
        window.location.reload();
        enqueueSnackbar("Dodano komentarz!");
      },
      (error) => {
        enqueueSnackbar("Dodawanie komentarza się nie powiodło.");
      }
    );
  };

  return (
    <>
      <form onSubmit={handleAddComment}>
        <TextField
          multiline
          fullWidth
          variant="filled"
          label="Komentarz"
          placeholder="Wpisz swój komentarz..."
          value={content}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          className="add-comment-button"
        >
          <span className="add-comment-button-content">skomentuj</span>
        </Button>
      </form>
    </>
  );
};
