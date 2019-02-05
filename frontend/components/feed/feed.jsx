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
          <h1>HELLO</h1>
          <p className="hello">Hello {this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
        </div>
      )
    };
  }

export default Feed;
