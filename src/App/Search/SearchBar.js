import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  constructor(params) {
    super(params);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    console.log(e.target);
  }

  redner() {
    return (
      <div className="search-bar">
        <input type="text" />
        <button onClick={this.handleClick}>Search</button>
      </div>
    )
  }
}

export default SearchBar;