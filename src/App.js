import React, { Component } from 'react';
import Home from './components/Home/Home';
import ToolBar from './components/ToolBar/ToolBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div >
        <ToolBar/>
        <Home/>
      </div>
    );
  }
}

export default App;
