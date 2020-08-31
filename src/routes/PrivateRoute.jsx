import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isAuthenticated from '../auth/Auth';


const PrivateRoute = ({
  component: Component, user, path, ...rest
}) => (
  <Route
    path={path}
    {...rest}
    render={props => (isAuthenticated(user) ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { originalPath: path },
        }}
      />
    ))
    }
  />
);

export default PrivateRoute;
