import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import ToolBar from './components/ToolBar/ToolBar';
import Images from './components/Images/Images';

import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <ToolBar />
          
            
            
            <Route exact path="/Website" component={Home} />
          
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/images" component={Images} />
            <Redirect to='/Website' from='/' />

          


        </div>
      </BrowserRouter>
    );
  }
}

export default App;
