import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();
  !isLoading &&
    user &&
    isAuthenticated &&
    console.log(user, isAuthenticated, isLoading);

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
