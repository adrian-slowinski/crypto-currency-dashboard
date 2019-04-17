import React, { Component } from 'react'; 
import './App.css';
import WelcomeMessage from './WelcomeMessage'; 
 
class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage name="CryptoDash" /> 
      </div>
    );
  }
}

export default App;