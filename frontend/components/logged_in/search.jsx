import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Results from './results';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = {
      input: '',
      results: this.props.results
    };
  }

  search(event) {
    event.preventDefault();
    this.setState({ input: event.target.value }, () => {
      if (this.state.input.length > 0) {
        this.props.fetchSearchResults(this.state.input);
      }
    });
  }

  componentWillUpdate(nextProps) {
    if (this.state.results.length !== nextProps.results.length) {
      this.setState({ results: nextProps.results });
  } if (this.props.location.pathname !== nextProps.location.pathname) {
      this.props.clearSearch();
      this.setState({ input: '' });
    }
  }

  render() {
    let resultsA;
    if (this.state.results.length < 1) {
      resultsA = null;
    } else {
      const searchResultItems = this.state.results.map(user => {
        return(
          <li className='search-result' key={user.id}>
            <Link to={`/users/${user.id}`} className='search-result-content'>
              <div className='main-nav-minipic'>
                <img src={user.profilePicUrl} />
              </div>
              <p>{user.fname} {user.lname}</p>
            </Link>
          </li>
        );
      });

      searchResults = (
        <ul className='search-results content-item'>
          {searchResultItems}
        </ul>
      );
    }

    let results = this.state.results.map((result, idx) => {
      return <Results key={idx} user={result}/>
    })

    return (
      <div>
        <div>
          <input onChange={this.search} type='text' placeholder='Search' value={this.state.input} />
          {/* <div className='nav-search-icon'>
            <img src={window.magnifierURL} />
          </div> */}
        </div>
        <div>
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);