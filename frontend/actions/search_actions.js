import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

function receiveResults(users) {
  return {
    type: RECEIVE_RESULTS,
    users
  };
}

export const clearSearch = () => {
  return {
    type: CLEAR_SEARCH
  };
};

export const fetchSearchResults = input => dispatch => {
  return SearchAPIUtil.fetchSearchResults(input).then(users => {
    return dispatch(receiveResults(users));
  });
};