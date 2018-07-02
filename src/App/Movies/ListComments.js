import React, { Component } from 'react';
import NewComment from './NewComment';

class ListComment extends Component {
  constructor(props) {
    super(props);

    this.setState = {
      comments: []
    }

    this.addComment = this.addComment.bind(this);
  }

  addComment(newComment) {
    const newComments = this.state.comments.push(newComment);
    this.setState({ comments: newComments });
  }

  componentWillMount() {
    fetch(`${window.location.origin}/comments?id${this.props.movieID}`)
      .then(res => res.json())
      .then((comments) => {
        this.setState({ comments });
      })
      .catch((err) => {
        this.setState({ error: err.message });
        console.log(err);
      })
  }

  render() {
    const comments = this.state.comments.map((comment) => {
      return (
        <div className="comment">
          {comment.text}
        </div>
      )
    })
    return (
      <div className="comment-list">
        <NewComment movieID={this.props.movieID} addComment={this.addComment} />
        {comments}
      </div>
    )
  }
}

export default ListComment;
