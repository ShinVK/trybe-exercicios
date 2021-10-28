import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='section'>
        <div className='main-content'>
          <Header />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
