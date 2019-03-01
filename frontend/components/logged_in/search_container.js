import { connect } from 'react-redux';
import { fetchResults, clearSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => {
  return ({
    results: state.entities.search
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSearchResults: input => dispatch(fetchSearchResults(input)),
    clearSearchResults: () => dispatch(clearSearchResults())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);