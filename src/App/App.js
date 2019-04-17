import React, { Component } from 'react'; 
import './App.css';
import WelcomeMessage from './WelcomeMessage';
import styled, {css} from 'styled-components';

const MyButton = styled.div`
  color: green;
  ${props => props.primary && css` 
    color: yellow;
  `}
` 
const TomatoButton = styled(MyButton)`
  color: tomato;
  border-color: tomato;
`;
class App extends Component {
  render() {
    return (
      <div>
        <WelcomeMessage name="CryptoDash" />
        <MyButton  > Welcome Button </MyButton>
        <MyButton primary > Welcome Button </MyButton>
        <TomatoButton > Welcome Button </TomatoButton>
      </div>
    );
  }
}

export default App;