import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {Comment} from "./Comment";



export const Comments =  props  => {

    return (
        <>
            <Typography variant="h5"> Komentarze({props.comments.length})</Typography>
            {
                props.comments.map((comment, index) => {
                    return <Comment {...comment}/>
                })
            }
        </>
    )
}