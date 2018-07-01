import React, { Component } from 'react';
import Ratings from './Ratings';

class Movie extends Component {

  render() {
    const movie = this.props.data;
    return (
      <div className="movie">
        <div className="title">{movie.title} <p>({movie.year})</p></div>
        <img src={movie.poster} alt="No poster for this Movie" />
        <ul>
          <li>Director: {movie.director}</li>
          <li>Actors: {movie.actors}</li>
          <li>Ratings: <Ratings data={movie.ratings} /></li>
        </ul>
      </div>
    )
  }
}

export default Movie;
