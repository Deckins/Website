import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
import './ToolBar.css';
class ToolBar extends Component {
    render() {
        return (
       
            <Navbar bg="primary" variant="light">
            <NavLink to="/Website" style={{color:'white'}}><h4>Home</h4></NavLink>
    
    <ul>
      <li><NavLink style = {{color:'white'}} activeStyle={{color:'blue'}} to="Website/projects">Projects</NavLink></li>
      <li><NavLink style = {{color:'white'}} activeStyle={{color:'blue'}} to="Website/about">About Me</NavLink></li>
      <li><NavLink style = {{color:'white'}} activeStyle={{color:'blue'}} to="Website/contact">Contact</NavLink></li>
    </ul>
   
    
  </Navbar>

 
        );
    }
}

export default ToolBar;