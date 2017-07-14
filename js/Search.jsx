import React from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

class Search extends React.Component {
  props: {
    shows: Array<{ title: string, description: string, year: string }>,
  };
  state = {
    searchTerm: '',
  };
  handleSearchTermChange = event =>
    this.setState({ searchTerm: event.target.value });
  render() {
    return (
      <div className="search">
        <Header
          showSearch
          searchTerm={this.state.searchTerm}
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description} ${show.year}`
                  .toLowerCase()
                  .indexOf(this.state.searchTerm.toLowerCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
