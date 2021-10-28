import React from 'react';
import Header from './header';
import Content from './content';
import Footer from './footer';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
