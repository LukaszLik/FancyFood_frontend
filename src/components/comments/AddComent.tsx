import React from "react";
import {Button, TextField} from "@material-ui/core";

export const AddComment: React.FC = props => {
    return (
        <>
            <form>
                <TextField multiline fullWidth variant="filled" label="Komentarz" placeholder="Wpisz swój komentarz..."/>
                <Button type="submit" variant="contained" size="large" color="secondary" style={{marginTop: "10px"}} ><span style={{color:"white", textTransform:"uppercase"}}>skomentuj</span></Button>
            </form>
        </>
    )
}