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
        <div className='bigScreen'>
          <div className='smallestCirclesContainer'>
            <div className='smallestCircle red'></div>
            <div className='smallestCircle red'></div>
          </div>
          <div className='smallScreen'></div>
          <div className='smallCircle red posBottom'></div>
        </div>
        <h1> Sou irmão desse </h1>
        <Pokemon />;
      </div>
    );
  }
}

export default Pokedex;
