import React from 'react';
import { shape, string } from 'prop-types';
import axios from 'axios';
import Header from './Header';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiData: { imdbRating: '' } };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:3000/${this.props.show.imdbID}`)
      .then((response: { data: { rating: string } }) => {
        console.log('response', response);
        this.setState({ apiData: response.data });
      })
      .catch(error => console.log('axios', error));
  }
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;
    if (this.state.apiData.rating) {
      rating = <h3>{this.state.apiData.rating}</h3>;
    } else {
      rating = (
        <img id="spin" src="/public/img/loading.png" alt="loading indicator" />
      );
      console.log(rating);
    }
    return (
      <div className="details">
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img alt={`${description}`} src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe
            title="OK"
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

Details.propTypes = {
  show: shape({
    title: string.isRequired,
    description: string.isRequired,
    year: string.isRequired,
    rating: string.isRequired,
    poster: string.isRequired,
    trailer: string.isRequired,
    imdbID: string.isRequired,
  }).isRequired,
};

export default Details;
