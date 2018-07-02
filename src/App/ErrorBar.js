import React, { Component } from 'react';
import './ErrorBar.css';

class ErrorBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: 'block'
    }

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ display: 'none' });
  }

  render() {
    return (
      <div className="error-bar" style={{ display: this.state.display }}>
        {this.props.message}
        <div onClick={this.handleClose}>
          <img src="./cancel_black.svg" alt="Cancel" />
        </div>
      </div>
    )
  }
}

export default ErrorBar;