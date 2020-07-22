import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import '../node_modules/antd/dist/antd.css'
import './base/base.css'
import './base/foot.scss'
import Mine from './pages/Mine/index'
import Login from './pages/Login/'
import Home from './pages/Home/index'
import Reg from './pages/Login/reg'
import List from './pages/List/index'
import Cart from './pages/Cart/index'

function App(props) {
  return (
    <div>
      <Switch>
        <Route path='/mine' component={Mine} props={props} />
        <Route path='/login' component={Login} />
        <Route path='/reg' component={Reg} />
        <Route path='/home' component={Home} />
        <Route path='/cart' component={Cart} />
        <Route path='/list' component={List} />
        <Redirect from='/' to='/home' exact />
      </Switch>
    </div>
  )
}
App = withRouter(App);
export default App;
