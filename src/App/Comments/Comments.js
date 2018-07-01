import React, { Component } from 'react';
import Comment from './Comment';
import ErrorBar from '../ErrorBar';
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
    let error;
    if (this.state.error) {
      error = <ErrorBar message={this.state.error} />
    }
    return (
      <div className="container">
        {error}
        {comments}
      </div>
    )
  }
}

export default Comments;
