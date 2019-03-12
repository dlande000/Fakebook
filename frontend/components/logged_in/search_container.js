import { connect } from 'react-redux';
import { fetchSearchResults, clearSearch } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = state => ({
  results: state.entities.search,
  users: state.entities.users
});

const mapDispatchToProps = dispatch => ({
  fetchSearchResults: input => dispatch(fetchSearchResults(input)),
  clearSearch: () => dispatch(clearSearch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);