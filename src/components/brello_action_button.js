import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { OpenFormButton } from "../style/brello_action_btn_style";

const BrelloActionButton = props => {
  const [formOpen, setFormOpen] = useState(false);

  const renderAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another list" : "Add another card";

    return (
      <OpenFormButton onClick={e => setFormOpen(!formOpen)} list={list}>
        <AddIcon />
        <p>{buttonText}</p>
      </OpenFormButton>
    );
  };

  const renderForm = () => {
    return <p>Test</p>;
  };

  return formOpen ? renderForm() : renderAddButton();
};

export default BrelloActionButton;
