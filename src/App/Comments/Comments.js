import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      movies: []
    };

  }

  componentWillMount() {
    fetch(`${window.location.origin}/comments`)
      .then(res => res.json())
      .then((json) => {
        this.setState({ comments: json.comments });
      })
  }

  render() {
    const comments = this.state.comments.map((data) => {
      return <Comment data={data} />
    })
    return (
      <div className="container">
        {comments}
      </div>
    )
  }
}

export default Comments;
