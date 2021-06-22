import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./Comments.css";
import AuthService from "../../services/auth";

export const AddComment = ({ handleAdd, handleChange, content }) => {
  return (
    <>
      <form onSubmit={handleAdd}>
        <TextField
          multiline
          fullWidth
          variant="filled"
          label={
            AuthService.getUser()
              ? "Komentarz"
              : "Zaloguj się aby dodać komentarz"
          }
          placeholder="Wpisz swój komentarz..."
          value={content}
          onChange={handleChange}
          disabled={AuthService.getUser() ? false : true}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          className="add-comment-button"
          style={{ marginTop: "13px" }}
          disabled={AuthService.getUser() ? (content ? false : true) : true}
        >
          <span className="add-comment-button-content">skomentuj</span>
        </Button>
      </form>
    </>
  );
};
