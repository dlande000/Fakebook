import React from 'react';

class Bio extends React.Component {

    render() {
    return (
        <div>
            <h6>{this.props.bio}</h6>
        </div>
        );
    }
}

export default Bio;