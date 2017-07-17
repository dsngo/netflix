import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShowCard extends Component {
  props: {
    poster: string,
    title: string,
    year: string,
    description: string,
    imdbID: string,
  };
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <Link to={`/details/${this.props.imdbID}`}>
        <div className="show-card">
          <img
            src={`./public/img/posters/${this.props.poster}`}
            alt={`${this.props.title} Show Poster`}
          />
          <div>
            <h3>
              {this.props.title}
            </h3>
            <h4>
              ({this.props.year})
            </h4>
            <p>
              {this.props.description}
            </p>
          </div>
        </div>
      </Link>
    );
  }
}

export default ShowCard;
