import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA, CHANGE_BRAND } from '../redux/actions';

const searchTerm = (state = '', action) =>
  action.type === SET_SEARCH_TERM ? action.searchTerm : state;

const apiData = (state = {}, action) =>
  action.type === ADD_API_DATA
    ? { [action.apiData.imdbID]: action.apiData }
    : state;
const brandName = (state = 'Client Videos', action) =>
  action.type === CHANGE_BRAND ? action.brand : state;

const rootReducer = combineReducers({ searchTerm, apiData, brandName });

export default rootReducer;
