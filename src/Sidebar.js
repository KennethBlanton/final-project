import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryPage from './CategoryPage';

class Sidebar extends Component {

  constructor (props) {
    super(props);

    this.isLoggedIn.bind(this);

    this.state = {
      loggedInOption: './Login',
      loginLinkText: 'Log In',
    }
  }

  isLoggedIn(loginState) {

    loginState = 'Login'

    loginState = './' + loginState;

    this.setState({ loggedInOption: loginState });

  }

  render() {
    const loggedInOption = this.state.loggedInOption;
    const loginLinkText = this.state.loginLinkText;
   

    return (
      <div className="Sidebar">
        <figure className="logo"></figure>
        <nav className="NavLinkContainer">
          <NavLink className="NavLink" to='./'>Home</NavLink>
          <NavLink className="NavLink" to="./CategoryPage">Categories</NavLink>
          <NavLink className="NavLink" to="./ImageCollection">All Images</NavLink>
          <NavLink className="NavLink" to={ loggedInOption }>{ loginLinkText }</NavLink>
          <NavLink className="NavLink" to="./Register">Register</NavLink>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
