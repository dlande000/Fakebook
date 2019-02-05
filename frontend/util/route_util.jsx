import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ loggedIn, path, component: Component, exact }) => {
  return (
  <Route 
    exact={exact}
    path={path}
    render={props => (
        loggedIn ? <Redirect to="/home" /> : <Component {...props} />
    )
  } />
)};

const Protected = ({ loggedIn, path, component: Component, exact }) => (
    <Route 
      exact={exact}
      path={path}
      render={props => (
          loggedIn ?  <Component {...props} /> : <Redirect to="/" />
      )
    } />
  );

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.id)}
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));