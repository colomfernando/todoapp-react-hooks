import React, { Component } from 'react';
import GlobalStyles from 'GlobalStyles';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <div className="App" />
      </React.Fragment>
    );
  }
}

export default App;
