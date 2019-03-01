import { RECEIVE_SEARCH_RESULTS, CLEAR_SEARCH_RESULTS } from '../actions/search_actions';

const searchResultsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return Object.keys(action.users);
    case CLEAR_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
};

export default searchResultsReducer;