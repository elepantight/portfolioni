
import React, { Component } from 'react';

import Navigation from './component/nav';
import Header from './component/header';


import './scss/styles.scss';
import Portfolio from './sidor/portfolio';

export default class App extends Component {
  render() {
    return <div className="App">
    <Navigation />
    <Header />
    {this.props.children}
    </div>;
  }
}