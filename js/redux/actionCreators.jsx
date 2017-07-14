import { SET_SEARCH_TERM } from '../redux/actions';

export const setSearchTerm = searchTerm => ({ // eslint-disable-line
  type: SET_SEARCH_TERM,
  searchTerm,
});
