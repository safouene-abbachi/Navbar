import React, { Component } from "react";
import "./App.css";
import MainMenu from "./component/MainMenu";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainMenu />
      </div>
    );
  }
}

export default App;
