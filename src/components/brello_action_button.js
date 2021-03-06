import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  OpenFormButton,
  CardContainerInput
} from "../style/brello_action_btn_style";
import { TextAreaAutoSize } from "../style/brello_action_btn_style";

const BrelloActionButton = props => {
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

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
    const { list } = props;
    const placeholder = list
      ? "Enter list title"
      : "Enter a title for this card";
    return (
      <CardContainerInput>
        <TextAreaAutoSize
          placeholder={placeholder}
          autoFocus
          onBlur={e => setFormOpen(!formOpen)}
          value={text}
          onChange={e => setText(e.target.value)}
        />
      </CardContainerInput>
    );
  };

  return formOpen ? renderForm() : renderAddButton();
};

export default BrelloActionButton;
