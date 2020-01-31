import React from "react";
import { ListContainer } from "../style/brello_list_style";
import BrelloCard from "./brello_card";

const BrelloList = ({ title, cards }) => {
  return (
    <ListContainer>
      <h3>{title}</h3>
      {cards.map(card => {
        return <BrelloCard text={card.text} />;
      })}
    </ListContainer>
  );
};

export default BrelloList;
