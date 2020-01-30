import React from "react";
import { ListContainer } from "../style/brello_list_style";

const BrelloList = ({ title }) => {
  return (
    <ListContainer>
      <h3>{title}</h3>
    </ListContainer>
  );
};

export default BrelloList;
