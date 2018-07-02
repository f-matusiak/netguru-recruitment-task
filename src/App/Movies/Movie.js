import React, { Component } from 'react';
import FullMovie from './FullMovie';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fullInfo: false
    }

    this.openMovie = this.openMovie.bind(this);
  }

  openMovie(e) {

  }

  render() {
    const movie = this.props.movie;
    let popup;
    if (this.state.fullInfo) {
      popup = (
        <FullMovie movie={this.state.movie} close={this.closeMovie} />
      )
    }
    return (
      <div className="movie" onClick={this.openMovie}>
        <img src={movie.poster} alt="No poster for this Movie" />
        <div className="title">{movie.title}</div>
        {popup}
      </div>
    )

  }
}

export default Movie;
