import React from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props: {
  shows: [{ title: string, description: string, year: string }],
  searchTerm: string,
}) =>
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description} ${show.year}`
              .toLowerCase()
              .indexOf(props.searchTerm.toLowerCase()) >= 0
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>;

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
export default connect(mapStateToProps)(Search);
