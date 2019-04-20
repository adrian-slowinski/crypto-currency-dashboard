import React from 'react';

const cc = require('cryptocompare')
 
<<<<<<< HEAD
export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites 
    }
  }

  componentDidMount = () => {
    this.fetchCoins(); 
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({coinList})
    console.log(coinList)
  }

  confirmFavorites = () => {
    console.log("Kurła co jest?")
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }))
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return{page: 'settings', firstVisit: true}
    }
    return {};
  }

  setPage = page => this.setState({page})

  // confirmFavorites = () => {
  //   this.setState({
  //     firstVisit: false,
  //     page: 'dashboard'
  //   });
  //   localStorage.setItem('cryptoDash', JSON.stringify({
  //     test: "hello"
  //   }));
  // }

  // savedSettings() {
  //   let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
  //   if(!cryptoDashData) {
  //     return {page: 'settings2', firstVisit: true}
  //   }
  //   return {};
  // }
 
  render(){
    return (
     <AppContext.Provider value={this.state}>
=======
export const AppContext = React.createContext('page');

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      page: 'settings',
      setPage: this.setPage()
    }
  }

  setPage = (page) => this.setState({page})

  render(){
    return (
      <AppContext.Provider value={this.state}>
>>>>>>> da5059bb1eadba6225fb79bc94614dfb2966fd40
        {this.props.children}
      </AppContext.Provider>
    )
  }
}