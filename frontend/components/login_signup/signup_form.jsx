import React from 'react';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '', 
            email: '',
            password: '',
            birthdate: '2006-01-01',
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
            <h2>Sign Up</h2>
            <p>It's free for obvious reasons.</p>
            <form onSubmit={this.handleSubmit} className="signup-form">
                <label>First name:
                    <input type="text" value={this.state.firstName} onChange={this.update('first_name')} className="signup-input"/>
                </label>
                <label>Last name:
                    <input type="text" value={this.state.lastName} onChange={this.update('last_name')} className="signup-input"/>
                </label>
                <br />
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')} className="signup-input"/>
                </label>
                <br />
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} className="signup-input"/>
                </label>
                <br />
                <label>Birthday:
                    <input type="date" value={this.state.birthdate} onChange={this.update('birthdate')} className="signup-input"/>
                </label>
                <br />
                <label>Gender:
                    <input type="text" value={this.state.gender} onChange={this.update('gender')} className="signup-input"/>
                </label>
                <br />
                <input className="user-submit" type="submit" value="Sign up" />
            </form>
        </div>
        );
    }
}

export default SignupForm;