import React from 'react';

class MiscInfo extends React.Component {
    render() {
        if (this.props.currentCity) {
            return (
                <div className="misc-info">
                    <img className="bio-house-image" src={window.houseIcon}/><h6>Lives in {this.props.currentCity}</h6>
                    <img className="bio-location-image" src={window.locationIcon}/><h6>From {this.props.hometown}</h6>
                </div>
        )} else {
            return (
                <h6>Born {this.props.birthday}</h6>
            )
        }
    }
}

export default MiscInfo;