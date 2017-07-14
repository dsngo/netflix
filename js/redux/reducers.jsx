import { SET_SEARCH_TERM } from '../redux/actions';

const defaultState = {
  searchTerm: '',
};

const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SEARCH_TERM:
      return { ...state, searchTerm: action.searchTerm };
    default:
      return state;
  }
};

export default rootReducer;
