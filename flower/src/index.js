import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'amfe-flexible'
import store from './store'
import { HashRouter, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';


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
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

