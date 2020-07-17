import React, { Component } from 'react'
// import { Carousel } from 'antd'
import Banner from './banner'
import { BarsOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import './home.scss'

class Home extends Component {
  render() {
    return (
      <div>
        {/* {<!--HeaderBar-->} */}
        <div className="headerbar">
          <div className="headerbar-left">
            <a href="">
              <BarsOutlined className="iconfont iconfont-sevice" />
            </a>
          </div>
          <div className="headerbar-logo">
            <img
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt=""
            />
          </div>
          <div className="headerbar-right">
            <div className="headerbar-right-kf active">
              <CustomerServiceOutlined className="iconfont iconfont-sevice" />
            </div>
          </div>
        </div>
        {/* {Banner} */}
        <Banner />
        {/* ConpanyInfo */}
        <div className="conpany-info">
        <div className="conpany-info-item">认证龙头企业</div>
        <div className="conpany-info-item">15年品牌</div>
        <div className="conpany-info-item">3小时送花</div>
        <div className="conpany-info-item">最近<a href="/productpj/"><u id="commentCount">375654</u></a>条好评</div>
    </div>
      </div>
    )
  }
}
export default Home
