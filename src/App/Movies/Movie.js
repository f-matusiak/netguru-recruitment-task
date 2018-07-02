import React, { Component } from 'react';
import FullMovie from './FullMovie';

class Movie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      display: 'none'
    }

    this.openMovie = this.openMovie.bind(this);
    this.closeMovie = this.closeMovie.bind(this);
  }

  openMovie() {
    this.setState({ display: 'block' });
  }

  closeMovie() {
    this.setState({ display: 'none' });
  }

  render() {
    const movie = this.props.movie;

    return (
      <div className="movie" >
        <div onClick={this.openMovie}>
          <img src={movie.poster} alt="No poster for this Movie" />
          <div className="title">{movie.title}</div>
        </div>
        <FullMovie movie={movie} style={{ display: this.state.display }} close={this.closeMovie} />
      </div>
    )

  }
}

export default Movie;
