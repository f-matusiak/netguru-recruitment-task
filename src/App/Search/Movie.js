import React, { Component } from 'react';
import Ratings from './Ratings';

class Movie extends Component {

  render() {
    if (this.props.data === undefined) {
      return (
        <div>
          Search for a Movie to add it to database
        </div>
      )
    }
    const movie = this.props.data;
    return (
      <div className="movie-search-box">
        <div className="title">{movie.Title} <p>({movie.Year})</p></div>
        <img src={movie.Poster} alt="No poster for this Movie" />
        <ul>
          <li>Director: {movie.Director}</li>
          <li>Actors: {movie.Actors}</li>
          <li>Ratings: <Ratings data={movie.Ratings} /></li>
        </ul>
      </div>
    )
  }
}

export default Movie;
