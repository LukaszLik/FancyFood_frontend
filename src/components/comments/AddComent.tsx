import React from "react";
import { Button, TextField } from "@material-ui/core";
import "./Comments.css";
import AuthService from "../../services/auth";

export const AddComment = ({ handleAdd, handelCh, content }) => {
  return (
    <>
      <form onSubmit={handleAdd}>
        <TextField
          multiline
          fullWidth
          variant="filled"
          label="Komentarz"
          placeholder="Wpisz swój komentarz..."
          value={content}
          onChange={handelCh}
          disabled={AuthService.getUser() ? false : true}
        />
        <Button
          type="submit"
          variant="contained"
          size="large"
          color="secondary"
          className="add-comment-button"
          style={{ marginTop: "13px" }}
          disabled={AuthService.getUser() ? false : true}
        >
          <span className="add-comment-button-content">skomentuj</span>
        </Button>
      </form>
    </>
  );
};
