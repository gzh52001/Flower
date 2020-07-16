import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter, BrowserRouter, Route } from 'react-router-dom'

const Router = process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter;
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

