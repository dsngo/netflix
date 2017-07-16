import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = (props: {
  poster: string,
  title: string,
  year: string,
  description: string,
  imdbID: string,
}) =>
  <Link to={`/details/${props.imdbID}`}>
    <div className="show-card">
      <img
        src={`./public/img/posters/${props.poster}`}
        alt={`${props.title} Show Poster`}
      />
      <div>
        <h3>
          {props.title}
        </h3>
        <h4>
          ({props.year})
        </h4>
        <p>
          {props.description}
        </p>
      </div>
    </div>
  </Link>;

export default ShowCard;
