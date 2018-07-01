import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" Component={Home} />
        </Switch>
        <h1>Hello There! </h1>
      </div>
    )
  }
}

export default App;
