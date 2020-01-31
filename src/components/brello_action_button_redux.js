import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { OpenFormButton } from "../style/brello_action_btn_style";
import { connect } from "react-redux";
import { setFormOpen } from "../actions";

const BrelloActionButton = props => {
  const { formOpen, setFormOpen } = props;
  const renderAddButton = () => {
    const { list } = props;
    const buttonText = list ? "Add another list" : "Add another card";

    return (
      <OpenFormButton onClick={() => setFormOpen()} list={list}>
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

const mapStateToProps = state => ({
  formOpen: state.formOpen
});

const mapDispatchToProps = dispatch => ({
  setFormOpen: () => dispatch(setFormOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(BrelloActionButton);
