import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '', 
            email: '',
            password: '',
            birthdate: '',
            gender: ''
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return event => this.setState({
            [field]: event.currentTarget.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    render() {
    return (
        <div className="signup-form-container">
            <h6>Sign Up for Fakebook</h6>
            <form onSubmit={this.handleSubmit} className="signup-form">
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')} className="signup-input"/>
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input"/>
                </label>
                <label>First name:
                    <input type="text" value={this.state.firstName} onChange={this.update('firstName')} className="signup-input"/>
                </label>
                <label>Last name:
                    <input type="text" value={this.state.lastName} onChange={this.update('lastName')} className="signup-input"/>
                </label>
                <label>Gender:
                    <input type="text" value={this.state.gender} onChange={this.update('gender')} className="signup-input"/>
                </label>
                <label>Birthday:
                    <input type="text" value={this.state.birthdate} onChange={this.update('birthdate')} className="signup-input"/>
                </label>
                <input className="session-submit" type="submit" value={this.props.formType} />
            </form>
        </div>
        );
    }
}

export default SignupForm;