import React, { Component } from 'react';
import Suggestions from './suggestions';

class Search extends Component {
    constructor(props) {
        super(props);

  this.state = {
    query: '',
    results: []
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  this.getInfo = this.getInfo.bind(this);
}

  getInfo() {
    // axios.get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
    //   .then(({ data }) => {
    //     this.setState({
    //       results: data.data
    //     })
    //   })
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
          this.getInfo();
      } else if (!this.state.query) {
      }
    });
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} />
      </form>
    )
  }
}

export default Search