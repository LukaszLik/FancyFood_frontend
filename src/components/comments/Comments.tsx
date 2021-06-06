import React, {useState} from "react";
import {Typography} from "@material-ui/core";
import {Comment} from "./Comment";

type CommentData = {
    content: string,
    created: string,
    creatorUsername: string
}

interface State {
    isLoading: boolean,
    comments: CommentData[]
}

const comments = [
    {content: "To jest komentarz", created: "10.01.2021", creatorUsername: "Admin Jebany"},
    {content: "To jest drugi komentarz", created: "01.06.2021", creatorUsername: "Karol Psikuta"}
]

export const Comments: React.FC = props => {

    const [state, setState] = useState<State>({
        isLoading: true,
        comments: comments
    })

    return (
        <>
            <Typography variant="h5"> Komentarze({state.comments.length})</Typography>
            {
                state.comments.map((comment, index) => {
                    return <Comment {...comment}/>
                })
            }
        </>
    )
}