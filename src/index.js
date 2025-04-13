// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ReactGA from 'react-ga4';

// ✅ Initialize GA4 with your actual Measurement ID
ReactGA.initialize('G-Y52J26S1KN');

// ✅ Send initial pageview
ReactGA.send({ hitType: 'pageview', page: window.location.pathname });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
