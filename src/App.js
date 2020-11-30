
import React, { Component } from 'react';

import Navigation from './component/nav';

import './scss/styles.scss';

export default class App extends Component {
  render() {
    return <div className="App">
    <Navigation />
    {this.props.children}
    </div>;
  }
}

