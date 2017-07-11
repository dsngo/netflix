import React from 'react';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';

const ShowCard = props =>
  <Link to={`/details/${props.imdbID}`}>
    <div className="show-card">
      <img
        src={`./public/img/posters/${props.poster}`}
        alt={`${props.title} Show Poster`}
      />
      <div>
        <h3>{props.title}</h3>
        <h4>({props.year})</h4>
        <p>{props.description}</p>
      </div>
    </div>
  </Link>;

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired,
  imdbID: string.isRequired,
};

export default ShowCard;
