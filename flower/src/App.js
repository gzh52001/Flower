import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import './base/base.css'
import './base/foot.scss'
import Mine from './pages/Mine/index'
import Login from './pages/Login/'
import Home from './pages/Home/index'

function App(props) {
  console.log(props)
  const menu = [
    {
      text: '我的',
      path: '/mine'
    },
    {
      text: '首页',
      path: '/home'
    },
    {
      text: '登陆',
      path: '/login'
    },
  ];

  // const goto = (path) => {
  //   props.history.push(path);
  // }
  return (
    <div >
      <Switch>
        <Route path='/mine' component={Mine} props={props} />
        <Route path='/login' component={Login} />
        <Route path='/home' component={Home} />
        <Redirect from='/' to='/home' exact />
      </Switch>
    </div>
  );
}
App = withRouter(App);
export default App;
