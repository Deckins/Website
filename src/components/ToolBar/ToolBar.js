import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
class ToolBar extends Component {
    render() {
        return (
            <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="/home">Home</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/home">Projects</Nav.Link>
      <Nav.Link href="/pricing">About Me</Nav.Link>
      <Nav.Link href="/pricing">Contact</Nav.Link>

    </Nav>
    
  </Navbar>
  

 
    
  
            
        );
    }
}

export default ToolBar;