import React from 'react';
import styled, {css} from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {Tile, SelectableTile} from '../Shared/Tile'
import CoinTile from './CoinTile';
 

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`
function getCoinsToDisplay(coinList) {
  return Object.keys(coinList).slice(0, 250);
}

export default function () {
  return <AppContext.Consumer> 
    {({coinList}) => <CoinGridStyled> 
      {getCoinsToDisplay(coinList).map(coinKey =>
          <CoinTile key={coinKey}   coinKey={coinKey}/>
        )}
    </CoinGridStyled> }
  </AppContext.Consumer>
}