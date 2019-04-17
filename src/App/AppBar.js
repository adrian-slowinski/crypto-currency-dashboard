import React from 'react'
import styled, {css} from 'styled-components';

const Logo = styled.div `
  font-size: 1.5em;
`
const Bar = styled.div`
  display: grid;
  margin-bottom: 40px;
  grid-template-columns: 180px auto 100px 100px;
`
const ControlButtonElem = styled.div `
  cursor: pointer;
  ${props => props.active && css`
    text-shadow: 0px 0px 60px #03ff03
  `}
`
const firstLetterUp = (up) => {
    return up
      .toLowerCase()
      .split(' ')
      .map((up) => {
        return up[0].toUpperCase() + up.substring(1);
      })
      .join(' ');
  } 

function ControlButton({name, active}) {
  return (
    <ControlButtonElem active={active}>
      {firstLetterUp(name)}
    </ControlButtonElem>
  )
}


export default function() {
  return <Bar>
    <Logo> CryptoDash </Logo>
    <div/>
    <ControlButton active name="dashboard" />
    <ControlButton name="settings" /> 
  </Bar>
}

