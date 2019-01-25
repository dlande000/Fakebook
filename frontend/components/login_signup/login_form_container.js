import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)),
    loginDemo: () => dispatch(login({email: "michael@bluthcompany.com", password: "tracyb"}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);