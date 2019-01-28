import React from 'react';

class MiscInfo extends React.Component {

    render() {
    return (
        <div>
            <h6>Lives in {this.props.currentCity}</h6>
            <h6>From {this.props.hometown}</h6>
            <h6>Born {this.props.birthday}</h6>
        </div>
        );
    }
}

export default MiscInfo;