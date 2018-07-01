import React, { Component } from 'react';

class Ratings extends Component {

  render() {
    const ratings = this.props.data.map((rating) => {
      return <li>{rating.Source} - {rating.Value}</li>
    })
    return (
      <ul className="ratings">
        {ratings}
      </ul>
    )
  }
}

export default Ratings;
