import React from "react";
import {Card, CardContent, IconButton} from "@material-ui/core";
import {AddCircle} from "@material-ui/icons";

export const EmptyFoodCard: React.FC = props => {
    return (
        <Card style={{
            width: "14vw", height: "31vh", minWidth: "250px",
            minHeight: "260px",
            // border: "4px solid #c79100",
            borderRadius: "10px",
        }} variant={"outlined"}>
            <CardContent style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90%"}}>
                <IconButton style={{color:"#26c6da"}}>
                    <AddCircle style={{fontSize:60}}/>
                </IconButton>
            </CardContent>
        </Card>
    )

}