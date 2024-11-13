// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'; // Global CSS for your application
import App from './App'; // Root component of your application

// Import Router for routing

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>

   <App/>
   
  </React.StrictMode>
);
