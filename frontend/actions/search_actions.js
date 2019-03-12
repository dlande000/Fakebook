import * as SearchAPIUtil from '../util/search_api_util';

export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const receiveResults = users => ({
  type: RECEIVE_RESULTS,
  users
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});

export const fetchSearchResults = input => dispatch => (
  SearchAPIUtil.fetchSearchResults(input)
    .then(users => (dispatch(receiveResults(users))))
);