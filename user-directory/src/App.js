import React, {Component} from './react';

import './index.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      name: '',
     location: '',
     employer: '',
     movies: [],


    }
  }
  render () {
    return (
      <div className='App'>
        <button className='Previous'>Previous</button>
        <button id='middle'>Edit</button>
        <button id='middle'>Delete</button>
        <button id='middle'>New</button>
        <button className='Next'>Next</button>
      </div>
    )
  }
}

export default App;
