import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';
import ToolBar from './components/ToolBar/ToolBar';
import Landing from './components/Landing/Landing';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
        <Switch>
          <Redirect to='/Website' from='/' exact />
          <ToolBar />
          
        </Switch>
            <Route exact path="/Website" component={Landing} />
            <Route exact path="/Website/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/contact" component={Contact} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
