import './App.css';

import React, { Component } from 'react'
import forumAPI from './services/redditAPI';

class App extends Component {
  componentDidMount() {
    console.log('esse é o api');
    console.log(forumAPI('reactjs')); 
  }

  render() {
    return (
      <div className="App">
        <h2>Selected</h2>  
      </div>
    )
  }
}


export default App;
