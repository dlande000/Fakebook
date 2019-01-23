import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
        this.props.login(user);
    }

    render() {
    return (
        <div className="login-form-container">
            <h6>Log In to Fakebook</h6>
            <form onSubmit={this.handleSubmit} className="login-form">
                <label>Email:
                    <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                </label>
                <label>Password:
                    <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                </label>
                <input className="session-submit" type="submit" value="Login" />
            </form>
        </div>
        );
    }
}

export default Login;