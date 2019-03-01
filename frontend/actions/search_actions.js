import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS';
export const CLEAR_SEARCH_RESULTS = 'CLEAR_SEARCH_RESULTS';

function receiveSearchResults = users => {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    users
  };
}

export const clearSearchResults = () => {
  return {
    type: CLEAR_SEARCH_RESULTS
  };
};

export const fetchSearchResults = input => dispatch => {
  return SearchAPIUtil.fetchSearchResults(input).then(users => {
    return dispatch(receiveSearchResults(users));
  });
};