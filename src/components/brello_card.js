import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const BrelloCard = () => {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography gutterBottom>Word of the Day</Typography>
      </CardContent>
    </Card>
  );
};

export default BrelloCard;
