import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import 'amfe-flexible'

import { HashRouter, BrowserRouter, Route } from 'react-router-dom'

const Router =
  process.env.NODE_ENV === 'production' ? BrowserRouter : HashRouter
// ReactDOM.render(
//   <Router>
//     <React.StrictMode> 严格模式
//       <App />
//     </React.StrictMode>
//   </Router>,
//   document.getElementById('root')
// );
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root'),
)
