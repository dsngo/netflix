import React from 'react';
import { connect } from 'react-redux';
import { getAPIDetails } from './redux/actionCreators';
import Header from './Header';

class Details extends React.Component {
  props: {
    show: {
      title: string,
      description: string,
      year: string,
      rating: string,
      poster: string,
      trailer: string,
      imdbID: string,
    },
    rating: string,
    getAPIDetails: Function,
  };
  componentDidMount() {
    if (!this.props.rating) {
      this.props.getAPIDetails(this.props.show.imdbID);
    }
  }
  render() {
    const { title, description, year, poster, trailer } = this.props.show;
    const rating = this.props.rating
      ? <h3>{this.props.rating}</h3>
      : <img id="spin" src="/public/img/loading.png" alt="loading indicator" />;
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
const mapStateToProps = (state, ownProps) => {
  const apiData = state.apiData[ownProps.show.imdbID] || {};
  return {
    rating: apiData.rating,
  };
};

const mapDispatchToProps = dispatch => ({
  getAPIDetails: imdbID => dispatch(getAPIDetails(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
