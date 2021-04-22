
import React, { Component } from 'react';


import './scss/styles.scss';

export default class App extends Component {
  render() {
    return <div className="App">
    {this.props.children}
    </div>;
  }
}

