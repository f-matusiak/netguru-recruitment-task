import React, { Component } from 'react';
import Comment from './Comment';

class Comments extends Component {
  constructor() {
    super();

    this.state = {
      comments: []
    };

  }

  componentWillMount() {
    fetch(`${window.location.origin}/comments`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ comments: json.comments });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
  }

  render() {
    const comments = this.state.comments.map((data) => {
      return <Comment data={data} />
    })
    if (this.state.error) {
      comments.unshift(<div className="error">{this.state.error}</div>)
    }
    return (
      <div className="container">

        {comments}
      </div>
    )
  }
}

export default Comments;
