import React, { Component } from 'react';
import './home.scss'

class Home extends Component {
    render() {

        return (
            <div>
            <div className="headerbar">

            <div className="headerbar-left">
            <a href="">
                <i className="iconfont iconfont-category"></i>
            </a>
                </div>

            <div className="headerbar-logo">
                 <img src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png" alt=""/>
            </div>

            <div className="headerbar-reght">
                <div className="headerbar-right-kf active">
                    <p className="iconfont iconfont-sevice"></p>
                </div>
             </div>

            </div>
            </div>
        )
    }
}
export default Home;