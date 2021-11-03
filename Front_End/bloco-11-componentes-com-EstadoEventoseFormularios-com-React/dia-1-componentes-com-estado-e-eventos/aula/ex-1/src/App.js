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
  render() {
    return ( <>
      <button onClick={clique1}> botao 1 </button>
      <button onClick={clique2}> botao 2 </button>
      <button onClick={clique3}> botao 3 </button>
      </>
    )
    
    
  }
}

export default App;
