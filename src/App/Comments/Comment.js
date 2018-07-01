import React, { Component } from 'react';

class Comment extends Component {

  redner() {
    return (
      <div className="comment">
        {this.props.text}
      </div>
    )
  }
}

export default Comment;
