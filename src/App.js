import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Cell extends Component {
  render() {
    return <div className="cell">{this.props.number}</div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="board">
          <Cell number={3} />
          <Cell number={5} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
          <Cell number={4} />
        </div>
        number={4}
      </div>
    );
  }
}

export default App;
