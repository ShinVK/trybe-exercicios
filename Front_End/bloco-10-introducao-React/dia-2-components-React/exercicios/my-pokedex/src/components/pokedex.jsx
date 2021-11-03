import { Component } from 'react';
// import Pokemon from './pokemon';
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
        <div className='buttons__container'>
          <div className='btn__circle'></div>
          <div>
            <div className='lightsAndScreen__container'>
              <div className='lights_container'>
                <div className='light one'></div>
                <div className='light two'></div>
              </div>
              <div className='smallestScreen'></div>
            </div>
          </div>

          <div className='btn__directions_container'>
            <div className='btn__direction up'></div>
            <div className='btn__direction down'></div>
            <div className='btn__direction right'></div>
            <div className='btn__direction left'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokedex;
