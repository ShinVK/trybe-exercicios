import { Component } from 'react';
import Pokemon from './pokemon';
import './pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className='pokedex__container'>
        <div className='pokedex__header'>
          <div className='bigCircle'></div>
          <div className='smallCircle red'></div>
          <div className='smallCircle yellow'></div>
          <div className='smallCircle green'></div>
        </div>
        <h1> Sou irmão desse </h1>
        <Pokemon />;
      </div>
    );
  }
}

export default Pokedex;
