import React from 'react';

class MiscInfo extends React.Component {

    render() {
    if (this.props.currentCity) {
    return (
        <div className="misc-info">
            <img className="bio-house-image" src="https://cdn1.iconfinder.com/data/icons/facebook-ui/48/additional_icons-10-512.png"/><h6>Lives in {this.props.currentCity}</h6>
            <img className="bio-location-image" src="https://cdn2.iconfinder.com/data/icons/facebook-ui/48/Jee-07-512.png"/><h6>From {this.props.hometown}</h6>
        </div>
        )} else {
            return (
                <h6>Born {this.props.birthday}</h6>
            )
        }
    }
}

export default MiscInfo;