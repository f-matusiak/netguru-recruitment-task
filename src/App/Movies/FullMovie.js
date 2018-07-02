import React, { Component } from 'react';
import ListComments from './ListComments';
import Ratings from './Ratings';

class FullMovie extends Component {

  render() {
    const movie = this.props.movie;
    return (
      <div className="popup">
        <div className="full-movie">
          <div className="poster">
            <img src={movie.poster} alt="No poster available" />
          </div>
          <div className="title">
            {movie.title} <p>({movie.year})</p>
          </div>
          <div className="director">{movie.director}</div>
          <div className="actors">{movie.actors}</div>
          <Ratings data={movie.ratings} />
        </div>
        <ListComments movieID={movie.imdbID} />
      </div>
    )
  }
}

export default FullMovie;