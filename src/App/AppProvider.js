import React from 'react';
 
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
        {this.props.children}
      </AppContext.Provider>
    )
  }
}