import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA } from '../redux/actions';

const searchTerm = (state = '', action) =>
  action.type === SET_SEARCH_TERM ? action.searchTerm : state;

const apiData = (state = {}, action) =>
  action.type === ADD_API_DATA ? { [action.imdbID]: action.apiData } : state;

const rootReducer = combineReducers({ searchTerm, apiData });

export default rootReducer;
