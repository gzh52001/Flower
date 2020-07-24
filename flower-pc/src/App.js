import React, { Component } from 'react';
import { Route, Switch ,Redirect} from 'react-router-dom';

import { myRoute } from './routes'

import  Form  from './components/Layout/index.jsx'
// 引入高阶组件hoc
import {withLogin} from './utils/hoc'
class App extends Component {
  
  render() {
    // console.log(Form);
    return (
      <Form>
        <Switch>
          {
            myRoute.map(item => {
              return <Route key={item.path} path={item.path} component={item.component}></Route>
            })
          }
          <Redirect from="/admin" to={myRoute[0].path}></Redirect>
          <Redirect to='404'></Redirect>
        </Switch>
      </Form>
    )
  }
}
App = withLogin(App)
export default App;
