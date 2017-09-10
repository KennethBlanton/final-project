import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Login from './Login';
import Register from './Register';
import Uploader from './Uploader';
import ImageCollection from './ImageCollection';
import CategoryPage from './CategoryPage';

class Header extends Component {

  render() {

    return (
        <Switch>
          <Route path="/" exact component={ App } />
          <Route path="/Login" component={ Login } />
          <Route path="/Register" component={ Register } />
          <Route path="/Uploader" component={ Uploader } />
          <Route path="/CategoryPage" component={ CategoryPage } />
          <Route path="/ImageCollection" component={ ImageCollection } />
        </Switch>
    );
  }
}

export default Header;


// *****DONT FORGET TO CHANGE THE ROUTES TO INCLUDE /~MICHELLE ETC