import React from 'react';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_utils';

export default () => (
    <div>
        <AuthRoute path='/signup' component={SignupContainer} />
    </div>
);