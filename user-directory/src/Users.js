import React, { Component } from "react";

class Users extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { user } = this.props;

    return (
      <div>
        <h1>
          {user.name.first} {user.name.last}
        </h1>

        <h3>
          From: {user.city}, {user.country}
        </h3>
        <h3>Job Title: {user.title}</h3>
        <h3>Employer: {user.employer}</h3>
        <br></br>
        <h3>
          Favorite Movies:
          <ol>
            <li>{user.favoriteMovies[0]}</li>
            <li>{user.favoriteMovies[1]}</li>
            <li>{user.favoriteMovies[2]}</li>
          </ol>
        </h3>
      </div>
    );
  }
}

export default Users;
