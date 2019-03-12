import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ToolBar.css';
class ToolBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <NavLink exact to="/Website/home" style={{ color: 'white' }}><h4>Home</h4></NavLink>
        <ul>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/projects">Projects</NavLink></li>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'white' }} to="/about">About Me</NavLink></li>
        </ul>
      </Navbar>


    );
  }
}

export default ToolBar;