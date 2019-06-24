import React, { Component } from 'react';
import Header from './components/Header';
import Contact from './components/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header branding="Contact Manager" />
        <Contact
          name="John Doe"
          email="johndoe@gmail.com"
          phone="555-555-5555"
        />
        <Contact
          name="Karen White"
          email="karenw@gmail.com"
          phone="444-444-44444"
        />
      </div>
    );
  }
}

export default App;
