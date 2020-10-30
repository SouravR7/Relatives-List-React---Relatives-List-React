import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relatives = ["Souvik", "Nilanjan", "Anirban", "Dipanjan"];
    return (
      <>
        <ol key="relativeList">
          {relatives.map((relatives, index) => (
            <li key={`relativeListitem ${index + 1}`}>{relatives}</li>
          ))}
        </ol>
      </>
    );
  }
}

export default App;
