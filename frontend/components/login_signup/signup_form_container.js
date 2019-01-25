import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (user) => dispatch(signup(user)),
    login: () => dispatch(login({email: "michael@bluthcompany.com", password: "tracyb"}))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);