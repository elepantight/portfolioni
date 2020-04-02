import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Portfolio from './sidor/Portfolio';
import Resume from './sidor/Resume';
import Contact from './sidor/Contact';

import Header from './component/header';

import App from './App';

import 'font-awesome/css/font-awesome.min.css';
import Footer from './component/footer';





ReactDOM.render(
    <Router>
      <App>
      <Header />
        <Switch> 
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/ontact' component={Contact} />
        </Switch>
        <Footer />
      </App>
    </Router>,
  
    document.getElementById("root")
  );
