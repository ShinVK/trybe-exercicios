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


  }

  clique1() {
    console.log(this);
    console.log('botao1');
  }
  
  clique2() {
    console.log('botao2');
  }
  
  clique3() {
    console.log('botao3');
  }

  render() {
    return ( <>
      <button onClick={this.clique1}> botao 1 </button>
      <button onClick={this.clique2}> botao 2 </button>
      <button onClick={this.clique3}> botao 3 </button>
      </>
    )
    
    
  }
}

export default App;
