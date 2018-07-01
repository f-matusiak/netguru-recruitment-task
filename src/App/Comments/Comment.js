import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="comment">
        <p className="text">{this.props.data.text}</p>
        <p className="movie">{this.props.data.movie}</p>
      </div>
    )
  }
}

export default Comment;
