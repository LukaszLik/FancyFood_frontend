import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { Comment } from "./Comment";

export const Comments = (props) => {
  return (
    <>
      <Typography
        variant="h5"
        className="typography typography-h5"
        style={{ fontSize: 24 }}
      >
        {" "}
        Komentarze ({props.comments.length})
      </Typography>
      {props.comments.map((comment, index) => {
        return <Comment {...comment} key={index} />;
      })}
    </>
  );
};
