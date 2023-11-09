import React from 'react';
import ReactDOM from 'react-dom/client';

// import Auth0ProviderApp from './Auth0ProviderApp/Auth0ProviderApp';
import { RoutedApp } from './RoutedApp/RoutedApp';
// import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Auth0ProviderApp /> */}
    <RoutedApp />
    {/* <App /> */}
  </React.StrictMode>
);
