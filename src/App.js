import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import ToolBar from './components/ToolBar/ToolBar';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='App'>
        <ToolBar/>
        <Route exact path="/Website" component={Home}/>
        <Route exact path="Website/about" component={About}/>
        <Route exact path="Website/projects" component={Project}/>
        <Route exact path="Website/contact" component={Contact}/>


      </div>
      </BrowserRouter>
    );
  }
}

export default App;
