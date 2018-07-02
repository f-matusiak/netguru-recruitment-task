import React, { Component } from 'react';
import ErrorBar from '../ErrorBar';

class NewComment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const text = e.target.parentElement.firstChild.value;
    const data = {
      "text": text, "movie": this.props.movieID
    }
    fetch(`${window.location.origin}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ text: text, movie: this.props.movieID })
    })
      .then(res => res.json())
      .then((res) => {
        this.props.addComment({ text, movie: this.props.movieID });
      })
      .catch((err) => {
        console.log(err);
      })

  }

  render() {
    let error;
    if (this.state.error) {
      error = <ErrorBar message={this.state.error} />;
    }
    return (
      <div className="comment-add">
        <input type="text" />
        <button onClick={this.handleClick}>Add</button>
        {error}
      </div>
    )
  }
}

export default NewComment;
