import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { OpenFormButton } from "../style/brello_action_btn_style";

const BrelloActionButton = props => {
  const renderAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another list" : "Add another card";

    return (
      <OpenFormButton list={list}>
        <AddIcon />
        <p>{buttonText}</p>
      </OpenFormButton>
    );
  };
  return renderAddButton();
};

export default BrelloActionButton;
