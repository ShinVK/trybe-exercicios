import React from 'react';
import './App.css';

function clique1() {
  console.log('botao1');
}

function clique2() {
  console.log('botao2');
}

function clique3() {
  console.log('botao3');
}

class App extends React.Component {
  constructor() {
    super();
    this.clique1 = this.clique1.bind(this)
    this.clique2 = this.clique2.bind(this)
    this.clique3 = this.clique3.bind(this)
    this.state = {
      numeroBt1: 0,
      numeroBt2: 0,
      numeroBt3: 0,
    }


  }

  clique1() {
   this.setState((ant, _props) => ({
     numeroBt1: ant.numeroBt1 + 1
   }))
  }
  
  clique2() {
    this.setState((ant, _props) => ({
      numeroBt2: ant.numeroBt2 + 1
    }))
  }
  
  clique3() {
    this.setState((ant, _props) => ({
      numeroBt3: ant.numeroBt3 + 1
    }))
  }

  render() {
    return ( <>
      <button onClick={this.clique1}> {this.state.numeroBt1}</button>
      <button onClick={this.clique2}>{this.state.numeroBt2} </button>
      <button onClick={this.clique3}> {this.state.numeroBt3} </button>
      </>
    )
    
    
  }
}

export default App;
