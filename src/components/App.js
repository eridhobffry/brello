import React from "react";
import BrelloList from "./brello_list";

const App = () => {
  return (
    <div className="app">
      <h2>Hallo world</h2>
      <BrelloList title={"To Do"}></BrelloList>
    </div>
  );
};

export default App;
