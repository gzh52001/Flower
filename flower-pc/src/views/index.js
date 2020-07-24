// import Login from './Login'

// import Home from './Home'
// import User from './User'
// import Indent from './Indent'
// import Goods from './Goods'
// import Nothing from './Nothing'

import Loadable from 'react-loadable';
import Loading from '../components/Loading/loading.jsx'; //这个是loading组件，根据自己写的路径
 
const Login = Loadable({ //写对应的路由
  loader: () => import('./Login'), //原理利用了异步回调，import写路径
  loading: Loading,
});
const Home= Loadable({ //写对应的路由
  loader: () => import('./Home'), //原理利用了异步回调，import写路径
  loading: Loading,
});
const User = Loadable({ //写对应的路由
  loader: () => import('./User'), //原理利用了异步回调，import写路径
  loading: Loading,
});
const Indent = Loadable({ //写对应的路由
  loader: () => import('./Indent'), //原理利用了异步回调，import写路径
  loading: Loading,
});
const Goods = Loadable({ //写对应的路由
  loader: () => import('./Goods'), //原理利用了异步回调，import写路径
  loading: Loading,
});
const Nothing = Loadable({ //写对应的路由
  loader: () => import('./Nothing'), //原理利用了异步回调，import写路径
  loading: Loading,
});


export {
    Login,
    Home,
    User,
    Indent,
    Goods,
    Nothing
}