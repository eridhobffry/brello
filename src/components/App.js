import React from "react";
import BrelloList from "./brello_list";
import { connect } from "react-redux";
import { ListContainer } from "../style/app_style";

const App = props => {
  const { lists } = props;
  return (
    <div className="app">
      <h2>Hallo world</h2>
      <ListContainer>
        {lists.map(list => {
          return <BrelloList title={list.title} cards={list.cards} />;
        })}
      </ListContainer>
    </div>
  );
};

const mapStateToProps = state => ({
  //List initiated for this components
  //and state.list come from reducer
  lists: state.lists
});

export default connect(mapStateToProps)(App);
