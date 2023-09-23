import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// Configure the Auth0Provider component
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-7u1x3pghe07d0c7o.us.auth0.com"
    clientId="drc0UdlcRkgUsVeBJ6EeckO2PhtyIk25"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />

  </Auth0Provider>
  </React.StrictMode>
);

