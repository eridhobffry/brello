import React from "react";
import { ListContainer } from "../style/brello_list_style";
import BrelloCard from "./brello_card";
import BrelloActionButton from "./brello_action_button";

const BrelloList = ({ title, cards }) => {
  return (
    <ListContainer>
      <h3>{title}</h3>
      {cards.map(card => {
        return <BrelloCard key={card.id} text={card.text} />;
      })}
      <BrelloActionButton />
    </ListContainer>
  );
};

export default BrelloList;
