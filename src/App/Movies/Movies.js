import React, { Component } from 'react';
import Movie from './Movie';
import ErrorBar from '../ErrorBar';
import './Movies.css';

class Movies extends Component {

  constructor() {
    super();
    this.state = {
      movies: [],
    };

  }

  componentWillMount() {
    fetch(`${window.location.origin}/movies`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ movies: json.movies });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
  }

  render() {
    let error;
    if (this.state.error) {
      error = <ErrorBar message={this.state.error} />;
    }
    if (this.state.movies.length > 0) {
      const movies = this.state.movies.map((movie) => {
        return <Movie movie={movie} />
      })
      return (
        <div className="container">
          {error}
          {movies}
        </div>
      )
    } else {
      return (
        <div className="container">
          No Movies available
        </div>
      )
    }
  }
}

export default Movies;
