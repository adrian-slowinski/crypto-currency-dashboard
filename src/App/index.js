import React, { Component } from 'react'; 
import './App.css';   
import AppLayout from './AppLayout'
import AppBar from './AppBar'
import {AppProvider} from './AppProvider';
<<<<<<< HEAD:src/App/index.js
import Settings from '../Settings';  
=======
>>>>>>> da5059bb1eadba6225fb79bc94614dfb2966fd40:src/App/App.js
 
class App extends Component {
  render() {
    return (
      <AppLayout>
<<<<<<< HEAD:src/App/index.js
        <AppProvider>
          <AppBar/> 
          <Settings />  
        </AppProvider>
=======
        <AppProvider />
        <AppBar />
        <WelcomeMessage name="CryptoDash" /> 
>>>>>>> da5059bb1eadba6225fb79bc94614dfb2966fd40:src/App/App.js
      </AppLayout>
    );
  }
}

export default App;