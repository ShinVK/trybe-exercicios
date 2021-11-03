import { Component } from 'react';

class Pokemon extends Component {
  render() {
    return (
      <div className='card'>
        <h1 className='card__title'> Pikachu </h1>
        <p>Electric</p>
        <p>6kg</p>
      </div>
    );
  }
}

export default Pokemon;
