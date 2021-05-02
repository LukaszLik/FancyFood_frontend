import React from "react";
import { TextField, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import "./InputList.css";

const InputList = (props) => {
  return (
    <div className="main">
      <Typography variant="h5">{props.name}</Typography>
      {props.el.map((field, idx) => {
        return (
          <div key={idx}>
            <span className="input-with-del">
              <TextField
                type="text"
                multiline
                rowsMax={3}
                label={props.label + " " + Number(idx + 1)}
                placeholder={props.placeholder + " " + Number(idx + 1)}
                margin="normal"
                variant="filled"
                name="data"
                size="small"
                value={field.data}
                onChange={(e) => props.change(e, idx, props.setEl, props.el)}
                className="dynamic-fields"
              />
              {props.el.length !== 1 && (
                <DeleteIcon
                  onClick={() => props.remove(idx, props.setEl, props.el)}
                  style={{ color: "red", fontSize: 40 }}
                />
              )}
            </span>
            <div>
              {props.el.length - 1 === idx && (
                <AddCircleIcon
                  onClick={(e) => props.add(idx, props.setEl, props.el)}
                  color="secondary"
                  style={{ fontSize: 50 }}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InputList;
