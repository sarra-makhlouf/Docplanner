import React, { Component } from 'react';
import Header from './components/header/header';
import IntroText from './components/intro-text/intro-text';
import './App.css';
import Service from './components/services/service';
import Partners from './components/partners/partners';
import Statistics from './components/statistics/statistics';
import Offices from './components/offices/offices';
import Footer from './components/footer/footer';



class App extends Component {
  render() {
    return (
        <div className="App">
          <Header />
          <main>
          <IntroText />
          <Service />
          <Partners />
          <Statistics />
          <Offices />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
