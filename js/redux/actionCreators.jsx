/* eslint no-console: 0 */
import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from '../redux/actions';

export const setSearchTerm = searchTerm => ({
  type: SET_SEARCH_TERM,
  searchTerm,
});
export const addAPIData = (imdbID, apiData) => ({
  type: ADD_API_DATA,
  imdbID,
  apiData,
});
export const getAPIDetails = imdbID => dispatch =>
  axios
    .get(`http://localhost:3000/${imdbID}`)
    .then((response: { data: { rating: string } }) =>
      dispatch(addAPIData(imdbID, response.data))
    )
    .catch(error => console.log('axios', error));
