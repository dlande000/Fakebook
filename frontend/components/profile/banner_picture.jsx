import React from 'react';

class BannerPic extends React.Component {

    render() {
    return (
        <div className="banner-pic-container">
            <img className="banner-pic" src={this.props.bannerPic}/>
        </div>
        );
    }
}

export default BannerPic;