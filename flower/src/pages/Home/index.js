import React, { Component } from 'react'
// import { Carousel } from 'antd'
import Foot from '../../component/footer/index'
import Banner from './banner'
import http, { require } from '../../utils/http'
import {
  BarsOutlined,
  CustomerServiceOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import './home.scss'

// constructor() {
//   super();
//   this.state = {
//       spcart: [],
//       youlike: []
//   }
// }
// async componentDidMount() {
//   const datas = await http.get('/cart/youlike');
//   let data = store.getState()
//   this.setState({
//       youlike: datas.result[0].and,
//       spcart: data.cart.cartlist
//   })
//   const { spcart, youlike } = this.state
//   // console.log(datas)
// }

class Home extends Component {
  //   constructor() {
  //   this.state = {
  //       data: [],
  //       banner: [],
  //       nav:[],
  //       select:[],
  //       occasion:[]

  //   }
  // }
  async componentDidMount() {
    // const datas = await fetch('http://10.3.141.34:3000/home').then((response) =>
    //   response.json(),
    // )
    const datas = await http.get('/home', {})
    let data = datas.result[0]
    this.setState({
      data: data,
      nav: data.nav.navigation,
      select: data.select.person,
      occasion: data.occasion.some,
      more: data.occasion.two,
      more_3: data.occasion.three,
      lover: data.love.lover,
      relatives: data.love.relatives,
      preserved: data.love.preserved,
      cake: data.love.cake,
      present:data.love.present,
      chocolate:data.love.chocolate
    })
  }

  state = {
    data: [],
    banner: [],
    nav: [],
    select: [],
    occasion: [],
    more: [],
    more_3: [],
    lover: [],
    relatives: [],
    preserved: [],
    cake: [],
    present:[],
    chocolate:[],
  }
  render() {
    const {
      banner,
      nav,
      select,
      occasion,
      more,
      more_3,
      lover,
      relatives,
      preserved,
      cake,
      present,
      chocolate,
    } = this.state
    console.log(cake)
    return (
      <div className="home">
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
          <div className="conpany-info-item">
            最近
            <a href="">
              <u id="commentCount">375654</u>
            </a>
            条好评
          </div>

          {/* <!--ProductCategory--> */}
        </div>
        <div className="procate">
          {nav.map((item, index) => {
            return (
              <div key={index + 1} className="procate-item">
                <a href={item.href} className="navigation">
                  <img src={item.img} alt={item.title} />
                  <p>{item.title}</p>
                </a>
              </div>
            )
          })}
        </div>
        {/* <!--Scene--> */}
        <section className="scene">
          <div className="modetitle">一秒选花</div>

          <div className="scene-list">
            {select.map((item, index) => {
              return (
                <div key={index + 1} className="scene-item scene-item-radius">
                  <a href="" className="navigation">
                    <img src={item.img} alt={item.title} />
                    <span className="scene-item-use-title">{item.title}</span>
                  </a>
                </div>
              )
            })}
          </div>

          <div className="scene-list">
            {occasion.map((item, index) => {
              return (
                <div key={index + 1} className="scene-item scene-item-radius">
                  <a href={item.href} className="navigation">
                    <img src={item.img} alt={item.title} />
                    <span className="scene-item-title">{item.title}</span>
                  </a>
                </div>
              )
            })}
          </div>
          {/* <!--mode-2--> */}
          <div className="scene-list">
            {more.map((item, index) => {
              return (
                <a
                  key={index + 1}
                  href={item.href}
                  className="scene-item scene-item-bg"
                >
                  <img src={item.img} alt="" />
                  <p className="scene-item-name">{item.title}</p>
                  <p className="scene-item-desc">{item.describe}</p>
                  <div className="scene-item-bottom">
                    <span className="scene-item-bottom-label">
                      {item.everyone}
                    </span>
                    <span className="scene-item-bottom-text" data-id="9012038">
                      {item.nprice}
                      <s>{item.oprice}</s>
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
          {/* <!--mode-3--> */}
          <div className="scene-list">
            {more_3.map((item, index) => {
              return (
                <div key={index + 1} className="scene-item">
                  <a className="navigation">
                    <img src={item.img} alt={item.title} />
                    <span className="scene-item-pange">{item.title}</span>
                  </a>
                </div>
              )
            })}
          </div>
        </section>
        {/* <!--Product Flower--> */}
        <section className="product">
          <h3 className="product-title">送恋人/爱情鲜花</h3>
          <div className="product-list">
            {lover.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="product-item product-item-horizontal"
                >
                  <a href="" className="navigation">
                    <div className="product-item-pic">
                      <img src={item.img} alt={item.Cpmc} />
                    </div>
                    <div className="product-item-info">
                      <p className="product-item-info-name text-overflow">
                        {item.Cpmc}
                      </p>
                      {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                      {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                      <p className="product-item-info-desc text-overflow ">
                        {item.Instro}
                      </p>
                      <div className="product-item-info-tags">
                        <span className="tag-promo">{item.title}</span>
                      </div>
                      <div className="product-item-info-promo">{item.hot}</div>
                      <div className="product-item-info-bottom">
                        <div className="product-item-info-bottom-left">
                          <p
                            className="product-item-info-prices"
                            data-id="9010966"
                          >
                            <strong>¥{item.Price}</strong>
                            <s>¥{item.LinePrice}</s>
                          </p>
                          <p className="product-item-info-sales">
                            已销售{item.Sales}万件
                          </p>
                        </div>
                        <div
                          className="product-item-info-bottom-right"
                          data-id={item.ItemCode}
                        >
                          <ShoppingCartOutlined />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
          <div className="product-more">
            <a href="" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        {/* <!--Product Friend--> */}
        <section className="product">
          <h3 className="product-title">送长辈鲜花</h3>
          <div className="product-list">
            {relatives.map((item, index) => {
              return (
                <div
                  key={index + 1}
                  className="product-item product-item-horizontal"
                >
                  <a href="" className="navigation">
                    <div className="product-item-pic">
                      <img src={item.img} alt={item.Cpmc} />
                    </div>
                    <div className="product-item-info">
                      <p className="product-item-info-name text-overflow">
                        {item.Cpmc}
                      </p>
                      <p className="product-item-info-desc text-overflow ">
                        {item.Instro}
                      </p>
                      <div className="product-item-info-tags">
                        <span className="tag-promo">{item.title}</span>
                      </div>
                      <div className="product-item-info-promo">{item.hot}</div>
                      <div className="product-item-info-bottom">
                        <div className="product-item-info-bottom-left">
                          <p
                            className="product-item-info-prices"
                            data-id="9010966"
                          >
                            <strong>¥{item.Price}</strong>
                            <s>¥{item.LinePrice}</s>
                          </p>
                          <p className="product-item-info-sales">
                            已销售{item.Sales}万件
                          </p>
                        </div>
                        <div
                          className="product-item-info-bottom-right"
                          data-id={item.ItemCode}
                        >
                          <ShoppingCartOutlined />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              )
            })}
          </div>
          <div className="product-more">
            <a href="" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        {/* <!--Product PPF--> */}
        <section className="product">
          <h3 className="product-title">永生花推荐</h3>
          <div className="tuoli">
            <div className="product-list product-list-vertical">
              {preserved.map((item, index) => {
                return (
                  <div
                    key={index + 1}
                    className="product-item product-item-vertical"
                  >
                    <a href="" className="navigation">
                      <div className="product-item-pic">
                        <img src={item.img} alt={item.Cpmc} />
                      </div>
                      <div className="product-item-info">
                        {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                        <p className="product-item-info-name  text-overflow-line2 ">
                          {item.Cpmc}
                          {item.Instro}
                        </p>
                        <div className="product-item-info-bottom">
                          <div className="product-item-info-bottom-left">
                            <p
                              className="product-item-info-prices"
                              data-id="1060022"
                            >
                              <strong>¥{item.Price}</strong>
                              <s>¥{item.LinePrice}</s>
                            </p>
                            <p className="product-item-info-sales">
                              已销售{item.Sales}件
                            </p>
                          </div>
                          <div
                            className="product-item-info-bottom-right "
                            data-id={item.ItemCode}
                          >
                            <ShoppingCartOutlined />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="product-more">
            <a href="" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        {/* <!--Product Cake--> */}
        <section className="product">
          <h3 className="product-title">蛋糕推荐</h3>
          <div className="tuoli">
            <div className="product-list product-list-vertical">
              {cake.map((item, index) => {
                return (
                  <div
                    key={index + 1}
                    className="product-item product-item-vertical"
                  >
                    <a href="" className="navigation">
                      <div className="product-item-pic">
                        <img src={item.img} alt={item.Cpmc} />
                      </div>
                      <div className="product-item-info">
                        {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                        <p className="product-item-info-name  text-overflow-line2 ">
                          {item.Cpmc}
                          {item.Instro}
                        </p>
                        <div className="product-item-info-bottom">
                          <div className="product-item-info-bottom-left">
                            <p
                              className="product-item-info-prices"
                              data-id="1060022"
                            >
                              <strong>¥{item.Price}</strong>
                              <s>¥{item.LinePrice}</s>
                            </p>
                            <p className="product-item-info-sales">
                              已销售{item.Sales}件
                            </p>
                          </div>
                          <div
                            className="product-item-info-bottom-right "
                            data-id={item.ItemCode}
                          >
                            <ShoppingCartOutlined />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="product-more">
            <a href="" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        {/* <!--Product Gift--> */}
        <section className="product">
          <h3 className="product-title">礼品推荐</h3>
          <div className="tuoli">
            <div className="product-list product-list-vertical">
              {present.map((item, index) => {
                return (
                  <div
                    key={index + 1}
                    className="product-item product-item-vertical"
                  >
                    <a href="" className="navigation">
                      <div className="product-item-pic">
                        <img src={item.img} alt={item.Cpmc} />
                      </div>
                      <div className="product-item-info">
                        {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                        <p className="product-item-info-name  text-overflow-line2 ">
                          {item.Cpmc}
                          {item.Instro}
                        </p>
                        <div className="product-item-info-bottom">
                          <div className="product-item-info-bottom-left">
                            <p
                              className="product-item-info-prices"
                              data-id="1060022"
                            >
                              <strong>¥{item.Price}</strong>
                              <s>¥{item.LinePrice}</s>
                            </p>
                            <p className="product-item-info-sales">
                              已销售{item.Sales}件
                            </p>
                          </div>
                          <div
                            className="product-item-info-bottom-right "
                            data-id={item.ItemCode}
                          >
                            <ShoppingCartOutlined />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="product-more">
            <a href="http://localhost:3000/#/list" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        {/* <!--Product Chocolate--> */}
        <section className="product">
          <h3 className="product-title">巧克力推荐</h3>
          <div className="tuoli">
            <div className="product-list product-list-vertical">
              {chocolate.map((item, index) => {
                return (
                  <div
                    key={index + 1}
                    className="product-item product-item-vertical"
                  >
                    <a href="" className="navigation">
                      <div className="product-item-pic">
                        <img src={item.img} alt={item.Cpmc} />
                      </div>
                      <div className="product-item-info">
                        {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                        <p className="product-item-info-name  text-overflow-line2 ">
                          {item.Cpmc}
                          {item.Instro}
                        </p>
                        <div className="product-item-info-bottom">
                          <div className="product-item-info-bottom-left">
                            <p
                              className="product-item-info-prices"
                              data-id="1060022"
                            >
                              <strong>¥{item.Price}</strong>
                              <s>¥{item.LinePrice}</s>
                            </p>
                            <p className="product-item-info-sales">
                              已销售{item.Sales}件
                            </p>
                          </div>
                          <div
                            className="product-item-info-bottom-right "
                            data-id={item.ItemCode}
                          >
                            <ShoppingCartOutlined />
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="product-more">
            <a href="" className="product-more-btn">
              查看更多
            </a>
          </div>
        </section>
        <Foot props={this.props} />
      </div>
    )
  }
}
export default Home
