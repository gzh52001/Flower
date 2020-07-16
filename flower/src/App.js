import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Mine from './pages/Mine/index'
import Home from './pages/Home/index'

function App() {
  const menu = [
    {
      text: '我的',
      path: '/mine'
    },
    {
      text: '首页',
      path: '/home'
    },
  ];
  // const goto = (path) => {
  //   props.history.push(path);
  // }
  return (
    <div >
      <Switch>
        <Route path='/mine' component={Mine} />
        <Route path='/home' component={Home} />
        <Redirect from='/' to='/home' exact />
      </Switch>
    </div>
  );
}

export default App;
