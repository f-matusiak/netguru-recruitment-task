import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Movie from './Movie';
import ErrorBar from '../ErrorBar';
class Search extends Component {

  constructor() {
    super();
    this.state = {
    }

    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(title) {
    fetch(`${window.location.origin}/movies`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ title: title })
    }).then(res => res.json())
      .then((res) => {
        this.setState({ movie: res.movie });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ error: err.message });
      })
  }

  render() {
    let errorBar;
    if (this.state.error) {
      errorBar = <ErrorBar message={this.state.error} />
    }
    return (
      <div className="container">
        <SearchBar handler={this.handleSearch} />
        <Movie data={this.state.movie} />
        {errorBar}
      </div>
    )
  }
}

export default Search;
