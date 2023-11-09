import React from 'react';

import { Auth0Provider } from '@auth0/auth0-react';
import Login from './Login';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

import Profile from './Profile';
// import { RoutedApp } from '../RoutedApp/RoutedApp';

const App = () => {
  return (
    <>
      <LoginButton />
      <LogoutButton />
      <Profile />
    </>
  );
};
function Auth0ProviderApp() {
  return (
    <Auth0Provider
      domain="sam-react-demo.eu.auth0.com"
      clientId="3HZW3M2V4pvgwbZpMJjYzhPOz0ZDo6al"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {/* <RoutedApp /> */}
      <App />
    </Auth0Provider>
  );
}

export default Auth0ProviderApp;
