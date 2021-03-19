import React, { Component } from "react";
import data from "./data";
import Users from "./Users";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: data,
      id: 0,
    };
  }

  next = () => {
    this.setState({ id: this.state.id + 1 });
  };

  previous = () => {
    this.setState({ id: this.state.id - 1 });
  };

  counter = () => {
    this.setState({ user: this.state.user.id + -1 });
  };

  render() {
    console.log(this.state.user);
    return (
      <div className="App">
        <div className="header">
          <div className="home">
            <h2 className="title">Home</h2>
          </div>
        </div>
        <div className="Card">
          <Users user={this.state.user[this.state.id]} />
        </div>

        <div className="buttons">
          <button className="Previous" onClick={this.previous}>
            {"<"}Previous
          </button>

          <div className="middlewrapper">
            <button id="middle">Edit</button>
            <button id="middle">Delete</button>
            <button id="middle">New</button>
          </div>
          <button className="Next" onClick={this.next}>
            Next{">"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
