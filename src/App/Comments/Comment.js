import React, { Component } from 'react';
import './Comments.css';

class Comment extends Component {

  render() {
    return (
      <div className="comment-box">
        <p className="comment-text">
          {this.props.data.text}
        </p>
        <p className="comment-movie">
          - {this.props.data.movie}
        </p>
      </div>
    )
  }
}

export default Comment;
