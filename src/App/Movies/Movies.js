import React, { Component } from 'react';
import Movie from './Movie';
import ErrorBar from '../ErrorBar';
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
    const movies = this.state.movies.map((movie) => {
      return <Movie data={movie} />
    })
    let error;
    if (this.state.error) {
      error = <ErrorBar message={this.state.error} />;
    }
    return (
      <div className="movie-container">
        {error}
        {movies}
      </div>
    )
  }
}

export default Movies;
