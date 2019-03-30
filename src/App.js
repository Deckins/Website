import React, { Component } from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Project from './components/Projects/Project';
import ToolBar from './components/ToolBar/ToolBar';
import Landing from './components/Landing/Landing';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
//    initializeReactGA = () => {
//     ReactGA.initialize('UA-137384144-1');
//     ReactGA.pageview('/Website');
// }
  render() {
    ReactGA.initialize('UA-137384144-1');
    ReactGA.pageview('https://deckins.github.io/Website/Home');
    return (
      <BrowserRouter>
        <div className='App'>
        <Switch>
          <Redirect to='/Website' from='/' exact />
          <Route exact path="/Website" component={Landing} />
          <ToolBar />
        </Switch>
            <Route exact path="/Website/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Project} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
