import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
        <Link to="/" className="button btn-1">
          Home
        </Link>
        <Link to="/movies" className="button btn-2">
          Movies
        </Link>
        <Link to="/comments" className="button btn-3">
          Comments
        </Link>

      </div>
    )
  }
}

export default Navbar;
