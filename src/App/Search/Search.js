import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movie from './Movie';

class Search extends Component {

  constructor() {
    super();
    this.state = {
      movie: {}
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(title) {
    fetch(`${window.location.origin}/movies`, {
      method: 'POST',
      body: JSON.stringify({ title: title })
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div className="container">
        <SearchBar handler={this.handleSearch} />
        <Movie data={this.state.movie} />
      </div>
    )
  }
}

export default Search;
