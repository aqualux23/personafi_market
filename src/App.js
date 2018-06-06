import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer.js'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Personafi</h1>
          <h2 className ="App-subtitle">A Personality Marketplace</h2>
        </header>
        <main>

        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
