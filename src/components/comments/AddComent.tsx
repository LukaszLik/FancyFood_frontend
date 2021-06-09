import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";
import axios from "axios";

export const AddComment: React.FC = props => {
    const [content, setContent] = useState("")

    const handleChange  = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setContent(e.target.value)
    }

    const handleAddComment  = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log(content)
    }

    return (
        <>
            <form method="POST" onSubmit={handleAddComment}>
                <TextField multiline fullWidth variant="filled" label="Komentarz" placeholder="Wpisz swój komentarz..." value={content} onChange={handleChange}/>
                <Button type="submit" variant="contained" size="large" color="secondary" style={{marginTop: "10px"}} ><span style={{color:"white", textTransform:"uppercase"}}>skomentuj</span></Button>
            </form>
        </>
    )
}