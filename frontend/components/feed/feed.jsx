import React from 'react';

class Feed extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
      this.render();
    }

    render() {
      return (
        <div className="navbar">
          <h1>YOU LOGGED IN!</h1>
          <p className="hello">Hello {this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
          <button onClick={() => this.props.logout()}>Logout</button>
        </div>
      )
    };
  }

export default Feed;