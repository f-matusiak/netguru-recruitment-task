import React, { Component } from 'react';
import NewComment from './NewComment';

class ListComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: []
    }

    this.addComment = this.addComment.bind(this);
  }

  addComment(newComment) {
    this.setState({ comments: [...this.state.comments, newComment] });
  }

  componentWillMount() {
    fetch(`${window.location.origin}/comments?id=${this.props.movieID}`)
      .then(res => res.json())
      .then((data) => {
        this.setState({ comments: data.comments });
      })
      .catch((err) => {
        this.setState({ error: err.message });
        console.log(err);
      })
  }

  render() {
    let comments;
    if (this.state.comments) {
      comments = this.state.comments.map((comment) => {
        return (
          <div className="comment">
            {comment.text}
          </div>
        )
      })
    } else {
      comments = <div className="comment">N/A</div>
    }
    return (
      <div className="comment-list">
        <NewComment movieID={this.props.movieID} addComment={this.addComment} />
        {comments}
      </div>
    )
  }
}

export default ListComment;
