import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Sidebar from "./Sidebar";
import Login from './Login';
import Register from './Register';
import CategoryPage from "./CategoryPage";
import GalleryPage from './GalleryPage';
import ImageDetail from './ImageDetail';


export default class App extends Component {

  // constructor (probs) {
  //   super(probs);
  // }

  // componentDidMount () {
   
  // } 

  render() {
    return (

      <BrowserRouter className="App">
        <div className="App__body">
          <Sidebar/>
          <Switch>
            <Route path="/~michele.james/build/" exact component={ GalleryPage } />
            <Route path="/~michele.james/build/LoginPage" component={ Login } />
            <Route path="/~michele.james/build/RegisterPage" component={ Register } />
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
            <Route path="/~michele.james/build/Detail" component={ ImageDetail } />

          </Switch>
         </div>
      </BrowserRouter>
    );
  }
}
