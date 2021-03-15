import React, { Component } from "react";

import "./index.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      location: "",
      employer: "",
      movies: [],
      id: null,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="home">
            <h2>Home</h2>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div className="name">
              <h1>{this.state.name}</h1>
            </div>
            <div className="number">
              <h1>{this.state.id}</h1>
            </div>
          </div>
          <div className="demographics"></div>
          <div className="movies"></div>
        </div>
        <div className="buttons">
          <button className="Previous">Previous</button>
          <div className="middlewrapper">
            <button id="middle">Edit</button>
            <button id="middle">Delete</button>
            <button id="middle">New</button>
          </div>
          <button className="Next">Next</button>
        </div>
      </div>
    );
  }
}

export default App;
