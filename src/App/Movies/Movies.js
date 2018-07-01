import React, { Component } from 'react';
import Movie from './Movie';
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
  }

  render() {
    const movies = this.state.movies.map((movie) => {
      return <Movie data={movie} />
    })
    return (
      <div className="movie-container">
        {movies}
      </div>
    )
  }
}

export default Movies;
