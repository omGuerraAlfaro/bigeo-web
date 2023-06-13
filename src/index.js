import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//components
import LoginForm from '../src/components/template/login/LoginForm';
import HomeViewAdmin from '../src/components/template/home/home';

// Mapbox
const link = document.createElement('link');
link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.5.0/mapbox-gl.css';
link.rel = 'stylesheet';
document.head.appendChild(link);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} /> 
        <Route path="/home-admin" element={<HomeViewAdmin />} /> 
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
