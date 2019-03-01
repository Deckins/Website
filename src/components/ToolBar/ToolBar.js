import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ToolBar.css';
class ToolBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="light">
        <NavLink exact to="/Website" style={{ color: 'white' }}><h4>Home</h4></NavLink>
        <ul>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'blue' }} to="/projects">Projects</NavLink></li>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'blue' }} to="/about">About Me</NavLink></li>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'blue' }} to="/contact">Contact</NavLink></li>
          <li><NavLink style={{ color: 'white' }} activeStyle={{ color: 'blue' }} to="/Website/images">Images</NavLink></li>

        </ul>
      </Navbar>


    );
  }
}

export default ToolBar;