import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import App from './App';
import Portfolio from './sidor/portfolio';



// import Contact from './pages/Contact';


// import Footer from './component/footer';



ReactDOM.render(
    <Router>
      <App>
        <Switch> 
        <Route path='/portfolio' exact component={Portfolio} />
        </Switch>
      </App>
    </Router>,
  
    document.getElementById("root")
  );
