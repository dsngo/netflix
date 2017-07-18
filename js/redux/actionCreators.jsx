/* eslint no-console: 0 */
import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from '../redux/actions';

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});
export const addAPIData = apiData => ({
  type: ADD_API_DATA,
  apiData,
});
export const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`https://ratingsapiapp.herokuapp.com/${imdbID}`)
    .then((response: { data: { rating: string } }) =>
      dispatch(addAPIData(response.data))
    )
    .catch(error => console.log('axios', error));
