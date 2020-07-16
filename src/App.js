import React, { Component } from "react";

import "./App.css";
import AddNotes from "./components/AddNotes/AddNotes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddNotes />
        <footer>
          {" "}
          <span>React-Notes-App@newtonSchool</span>
        </footer>
      </div>
    );
  }
}

export default App;
