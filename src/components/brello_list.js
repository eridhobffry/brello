import React from "react";
import { ListContainer } from "../style/brello_list_style";
import BrelloCard from "./brello_card";

const BrelloList = ({ title }) => {
  return (
    <ListContainer>
      <h3>{title}</h3>
      <BrelloCard> </BrelloCard>
    </ListContainer>
  );
};

export default BrelloList;
