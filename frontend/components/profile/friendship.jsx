import React from 'react';

class Friendship extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.status === "Friends") {

        } else if (this.props.status === "Pending") {

        } else if (this.props.status === "Add Friend") {

        } else {
            own profile;
        }


        const { first_name, last_name, email, password, day, month, year, gender } = this.state;
        const birthdate = new Date(year, month - 1, day);
        const user = Object.assign({}, { first_name, last_name, email, password, birthdate, gender });
        this.props.signup(user);
    }

    render() {
    return (
        <div className="friendship">
            <button onClick={this.handleSubmit.bind(this)}>{this.props.status}</button>
        </div>
    )}
}

export default Friendship;