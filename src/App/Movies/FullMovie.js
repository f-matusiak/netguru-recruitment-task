import React, { Component } from 'react';
import ListComments from './ListComments';
import Ratings from './Ratings';

class FullMovie extends Component {

  render() {
    const movie = this.props.movie;
    return (
      <div className="popup" style={this.props.style}>
        <div className="full-movie">
          <div onClick={this.props.close} className="close">
            <img src="./cancel.svg" alt="Close" />
          </div>
          <div className="poster">
            <img src={movie.poster} alt="No poster available" />
          </div>
          <div className="title">
            {movie.title} <p>({movie.year})</p>
          </div>
          <div className="director">{movie.director}</div>
          <div className="actors">{movie.actors}</div>
          <Ratings data={movie.ratings} />
          <ListComments movieID={movie.imdbID} />
        </div>
      </div>
    )
  }
}

export default FullMovie;