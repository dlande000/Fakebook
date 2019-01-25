import React from 'react';

class MiscInfo extends React.Component {

    render() {
    return (
        <div>
            <h6>Hometown: {this.props.hometown}</h6>
            <h6>Current location: {this.props.currentCity}</h6>
            <h6>Birthday: {this.props.birthday}</h6>
        </div>
        );
    }
}

export default MiscInfo;