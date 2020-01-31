import React from "react";
import BrelloList from "./brello_list";
import { connect } from "react-redux";

const App = props => {
  const { lists } = props;
  return (
    <div className="app">
      <h2>Hallo world</h2>
      {lists.map(list => {
        return <BrelloList title={list.title} cards={list.cards} />;
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  //List initiated for this components
  //and state.list come from reducer
  lists: state.lists
});

export default connect(mapStateToProps)(App);
