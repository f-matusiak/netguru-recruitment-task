import React, { Component } from 'react';
import ErrorBar from '../ErrorBar';

class ListComment extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const text = e.target.parentElement.firtsChild.value;
    fetch(`${window.location.origin}/comments`, {
      method: 'POST',
      header: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ text, movie: this.props.movieID })
    })
      .then((res) => {
        addComment({ text, movie: movieID });
      })
      .catch((err) => {
        this.setState({ error: err.message });
      })
  }

  redner() {
    let error;
    if (this.state.error) {
      error = <ErrorBar message={this.state.error} />;
    }
    return (
      <div className="comment-add">
        {error}
        <input type="text" />
        <button>Add</button>
      </div>
    )
  }
}