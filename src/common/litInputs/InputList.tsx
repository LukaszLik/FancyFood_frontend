import React from "react";
import {
    TextField, Typography
} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle'
import "./InputList.css";

const InputList = (props) => {
    return(
        <div>
            <Typography variant="h5">{props.name}</Typography>
            {props.el.map((field, idx) => {
                return (
                    <div key={idx}>
                        <TextField
                            type="text"
                            multiline
                            rowsMax={3}
                            label="Składnik"
                            placeholder="Składnik"
                            margin="normal"
                            variant="filled"
                            name="data"
                            value={field.data}
                            onChange={e => props.change(e, idx, props.setEl, props.el)}
                            className="dynamicField"
                        />
                        {props.el.length !== 1 && <DeleteIcon
                            onClick={() => props.remove(idx, props.setEl, props.el)}
                            style={{color: "red"}}
                        />}
                        <div>
                            {props.el.length - 1 === idx && <AddCircleIcon
                                onClick={e => props.add(idx, props.setEl, props.el)}
                                color="secondary"
                            />}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default InputList;