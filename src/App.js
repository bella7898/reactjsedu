import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';
import Chapter from './components/Chapter/Chapter';
import Events from './components/Events/Events';
import Donate from './components/Donate/Donate';
import Partners from './components/Partners/Partners';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Introduction />
        <Chapter />
        <Events />
        <Donate />
        <Partners />
        <Sponsors />
        <Footer />
      </div>
    );
  }
}
export default App;