import React from "react";
import { Card, CardContent, IconButton } from "@material-ui/core";
import { AddCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./styles/EmptyFoodCart.css";

export const EmptyFoodCard: React.FC = (props) => {
  return (
    <Card className="empty-main-container" variant="outlined">
      <CardContent className="empty-card-container">
        <IconButton
          className="empty-btn"
          component={Link}
          to="/recipe/add"
          color="secondary"
        >
          <AddCircle className="icon" />
        </IconButton>
      </CardContent>
    </Card>
  );
};
