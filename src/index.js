import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Navigation from './component/nav';
import Frontpage from './sidor/Frontpage';
import Portfolio from './sidor/portfolio';
import Resume from './sidor/Resume';
import Contact from './sidor/Contact';
import Gallery from './sidor/Gallery';
import App from './App';


// import Footer from './component/footer';

import 'font-awesome/css/font-awesome.min.css';



ReactDOM.render(
    <Router>
      <Navigation />
      <App>
        <Switch> 
        <Route path='/' exact component={Frontpage} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
        <Route path="/gallery" component={Gallery} />
        </Switch>
         {/*<Footer /> */}
      </App>
    </Router>,
    
  
    document.getElementById("root")
  );
