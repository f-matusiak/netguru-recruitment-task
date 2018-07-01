import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Search from './Search/Search';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import Movies from './Movies/Movies';
import Comments from './Comments/Comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/search" component={Search} />
          <Route path="/listcom" component={Comments} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
