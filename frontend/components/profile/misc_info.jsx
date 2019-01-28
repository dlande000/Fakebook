import React from 'react';

class MiscInfo extends React.Component {

    render() {
    return (
        <div className="misc-info">
            <h6>Lives in {this.props.currentCity}</h6>
            <h6>From {this.props.hometown}</h6>
            <h6>Born {this.props.birthday}</h6>
        </div>
        );
    }
}

export default MiscInfo;