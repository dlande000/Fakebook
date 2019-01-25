import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitDemo = this.handleSubmitDemo.bind(this);
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

    handleSubmitDemo(event) {
        event.preventDefault();
        this.props.loginDemo();
      }

    render() {

    const errors = this.props.errors.map((error, i) => {
        return <li key={i}>{error}</li>
    })

    return (
            <div className="login-form-container">
                <form onSubmit={this.handleSubmit} className="login-form">
                    <label className="login-email">Email
                        <br/>
                        <input type="text" value={this.state.email} onChange={this.update('email')} className="login-input"/>
                    </label>
                    <label className="login-password">Password
                        <br/>
                        <input type="password" value={this.state.password} onChange={this.update('password')} className="login-input"/>
                    </label>
                    <input className="session-submit" type="submit" value="Log In" className="login-button"/>
                </form>
                <a className="demo-link-1" onClick={this.handleSubmitDemo}>Log in as demo?</a>
            </div>
        );
    }
}

export default Login;