/* eslint no-console:0 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from './redux/actionCreators';
import '../public/normalize.css';
import '../public/style.css';

class Landing extends Component {
  props: {
    searchTerm: string,
    setSearchTerm: Function,
    history: RouterHistory,
  };
  handleSetSearchTerm = e => {
    this.props.setSearchTerm(e.target.value);
  };
  handleSearchSubmit = e => {
    e.preventDefault();
    this.props.history.push('/search');
  };
  render() {
    return (
      <div className="landing">
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type="text"
            value={this.props.searchTerm}
            onChange={this.handleSetSearchTerm}
            placeholder="Search"
          />
        </form>
        <Link to="/search">or Browse All</Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({ searchTerm: state.searchTerm });

export default connect(mapStateToProps, actionCreators)(Landing);
