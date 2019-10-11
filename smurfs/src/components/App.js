import React, { Component } from "react";
import NewSmurfDisplay from './NewSmurfDisplay'
import SmurfForm from './SmurfForm'
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NewSmurfDisplay />
        <SmurfForm />
      </div>
    );
  }
}

export default App;
