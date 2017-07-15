import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setSearchTerm } from './redux/actionCreators';

const Header = (props: {
  setSearchTerm: Function,
  showSearch: Boolean,
  searchTerm: string,
}) => {
  const utilSpace = props.showSearch
    ? <input
        onChange={e => props.setSearchTerm(e.target.value)}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    : <h2>
        <Link to="/search">Back</Link>
      </h2>;
  return (
    <header>
      <h1>
        <Link to="/" onClick={() => props.setSearchTerm('')}>
          svideo
        </Link>
      </h1>
      {utilSpace}
    </header>
  );
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});
const mapDispatchToProps = dispatch => ({
  setSearchTerm: searchTerm => dispatch(setSearchTerm(searchTerm)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
