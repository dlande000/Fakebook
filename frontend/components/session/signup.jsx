import React from 'react';

class Signup extends React.Component {
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
        this.handleSubmit = this.handleSubmit.bind.this;
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state).then(() => this.props.history.push('/'));
    }

    render () {
        return (
            <div className="session-form">
                <h2>Sign Up</h2>
                <label>First Name:
                    <input type="text" value={this.state.firstName} onChange={this.handleInput('firstName')}/>
                </label>
                <label>Last Name:
                    <input type="text" value={this.state.lastName} onChange={this.handleInput('lastName')}/>
                </label>
                <label>Email
                    <input type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                </label>
                <label>Password
                    <input type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                </label>
                <label>Birthday
                    <input type="text" value={this.state.birthdate} onChange={this.handleInput('birthdate')}/>
                </label>
                <label>Gender
                    <input type="text" value={this.state.gender} onChange={this.handleInput('gender')}/>
                </label>
                <button onClick={this.handleSubmit}>Sign Up</button>
            </div>
        )
    }
};

export default Signup;