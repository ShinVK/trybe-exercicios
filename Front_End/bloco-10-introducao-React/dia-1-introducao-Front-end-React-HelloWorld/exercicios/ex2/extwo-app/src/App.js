import React from 'react';
import Header from './header';
import Content from './content';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
