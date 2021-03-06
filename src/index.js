import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Frontpage from './sidor/Frontpage';
import Portfolio from './sidor/Portfolio';
import Resume from './sidor/Resume';
import Contact from './sidor/Contact';
import Gallery from './sidor/Gallery';
import App from './App';


import Footer from './component/footer';

import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(
    <Router>
      <App>
        <Switch> 
        <Route path='/' exact component={Frontpage} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path="/gallery" component={Gallery} />
        </Switch>
        <Footer />
      </App>
    </Router>,
    
  
    document.getElementById("root")
  );
