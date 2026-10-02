import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contexts/themeContext';
import { RoutedApp } from './RoutedApp/RoutedApp';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RoutedApp />
    </ThemeProvider>
  </React.StrictMode>
);
