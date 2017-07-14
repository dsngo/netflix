import React from 'react';
import { Link } from 'react-router-dom';
import { func, bool, string } from 'prop-types';

class Header extends React.Component {
  static propTypes = {
    handleSearchTermChange: func.isRequired,
    showSearch: bool.isRequired,
    searchTerm: string.isRequired,
  };
  static defaultProps = {
    searchTerm: '',
    handleSearchTermChange: func,
    showSearch: false,
  };
  render() {
    let utilSpace;
    if (this.props.showSearch) {
      utilSpace = (
        <input
          onChange={this.props.handleSearchTermChange}
          value={this.props.searchTerm}
          type="text"
          placeholder="Search"
        />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to="/search">Back</Link>
        </h2>
      );
    }
    return (
      <header>
        <h1 onChange={this.someMethod}>
          <Link to="/">
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

export default Header;
