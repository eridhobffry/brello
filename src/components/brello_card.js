import React from "react";

import Card from "@material-ui/core/Card";
import { CardContainer } from "../style/brello_card_style";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const BrelloCard = ({ text }) => {
  return (
    <CardContainer variant="outlined">
      <CardContent>
        <Typography gutterBottom>{text}</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default BrelloCard;
