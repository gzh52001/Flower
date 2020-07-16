import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home/index'
import List from './pages/List/index'
import Cart from './pages/Cart/index'
import Mine from './pages/Mine/index'

function App() {
  const menu = [
    {
      text: '首页',
      path: '/home'
    },
    {
      text:'分类',
      path:'/list'
    },
    {
      text:'购物车',
      path:'/cart'
    },
    {
      text: '我的',
      path: '/mine'
    },
  ];
  // const goto = (path) => {
  //   props.history.push(path);
  // }
  return (
    <div >
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/list' component={List} />
        <Route path='/cart' component={Cart} />
        <Route path='/mine' component={Mine} />
        <Redirect from='/' to='/home' exact />
      </Switch>
    </div>
  );
}

export default App;
