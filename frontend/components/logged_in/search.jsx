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
      } else {
        this.setState({ input: '' });
        this.props.clearSearch();
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
    let results = this.state.results.map((result, idx) => {
      return <Results key={idx} id={result} users={this.props.users} />
    });

    return (
      <div>
        <div className="search-bar">
          <input onChange={this.search} type='text' placeholder='Search' value={this.state.input} />
          <img className="search-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg" alt=""/>
        </div>
        <div className="navbar-results">
          <ul>
            {results}
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);