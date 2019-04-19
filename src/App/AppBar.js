import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Logo = styled.div `
  font-size: 1.5em; 
`

const Bar = styled.div `
  display: grid; 
  margin-bottom: 40px; 
  grid-template-columns: 180px auto 100px 100px; 
`

const ControlButtonElem = styled.div `
  cursor: pointer; 
  ${props => props.active && css`
    text-shadow: 0px 8px 14px #03ff03; 
  `}
  ${props => props.hidden && css`
    display: none; 
  `}
`

<<<<<<< HEAD
function toProperCase(lower){
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}

function ControlButton({name}){
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElem 
          active={page === name}
          onClick={() => setPage(name)}    
        >
          {toProperCase(name)}
        </ControlButtonElem>
      )}
    </AppContext.Consumer>
  )
}

export default function(){
  return (
    <Bar>
      <Logo> CryptoDash 2</Logo>
      <div/>
      <ControlButton active name="dashboard"/>
      <ControlButton name="settings"/> 
    </Bar>
  );
=======
function ControlButton({name}) {
  return (
    <div>
       <AppContext.Consumer>
        {({page, setPage}) => (
          <ControlButtonElem 
            active={page === name}
            onClick={() => setPage(name)}  
          >
          {firstLetterUp(name)}
          </ControlButtonElem>
        )}
       </AppContext.Consumer>
        
    </div>
  )
}
 
export default function() {
  return <Bar>
    <Logo> CryptoDash </Logo>
    <div/>
    <ControlButton active name="dashboard" />
    <ControlButton name="settings" /> 
  </Bar>
>>>>>>> da5059bb1eadba6225fb79bc94614dfb2966fd40
}
