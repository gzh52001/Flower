import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, BrowserRouter, Route, Switch ,Redirect} from 'react-router-dom';

import App from './App';
import "antd/dist/antd.css"

import { adminRoute } from './routes'
const Router = process.env.NODE_ENV === "production" ? BrowserRouter : HashRouter;
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/admin" component={App}></Route>
      {
        adminRoute.map(item => {
          return <Route key={item.path} path={item.path} component={item.component}></Route>
        })
      }
      <Redirect to='/admin' from="/" exact></Redirect>
      <Redirect to='/404'></Redirect>
    </Switch>
  </Router>
  ,
  document.getElementById('root')
);


