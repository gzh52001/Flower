import React, { Component } from 'react'
import './detail.scss'
import Myhead from '../Mine/myhead'
import Banner from './banner'
import axios from 'axios'
import {
  CustomerServiceOutlined,
  ShoppingCartOutlined,
  StarOutlined,
} from '@ant-design/icons'

class Detail extends Component {
  state = {
    goodsinfo: [],
  }
  componentDidMount() {
    axios({
      url: 'http://10.3.141.34:3000/detail',
      method: 'get',
    }).then((res) => {
      if (res.data.meta.status === 200) {
        let datas = res.data.result[0]
        this.setState({
          goodsinfo: datas,
        })
      }
    })
  }
  addtocart = (id, title, price) => {
    axios({
      url: 'http://10.3.141.34:3000/cart/add',
      method: 'post',
      data: {
        id: id.toString(),
        number: 1,
        img: 'https://img01.hua.com/uploadpic/newpic/9012455.jpg',
        title,
        price,
        status: true,
      },
    }).then((res) => {
      console.log(res)
    })
  }

  buy = (id, title, price) => {
    this.addtocart.bind(id, title, price)

    this.props.history.push('/cart')
  }

  jumpcart = () => {
    this.props.history.push('/cart')
  }
  render() {
    const { goodsinfo } = this.state
    return (
      <div className="detail">
        <Myhead />
        <Banner gimg={goodsinfo} />
        <section className="proinfo">
          <div className="proinfo-head">
            <div className="proinfo-head-title">
              {goodsinfo.title}
              <span className="text-orange">{goodsinfo.text}</span>
            </div>
            <div className="proinfo-head-collect">
              <a className="navigation">
                <i className="iconfont iconfont-collect">
                  <StarOutlined />
                </i>
              </a>
            </div>
          </div>
          <div className="proinfo-body">
            <div className="proinfo-body-price">
              <span className="proinfo-body-price-sjg">
                ￥{goodsinfo.nprice}
              </span>
              <s className="proinfo-body-price-jg">￥{goodsinfo.oprice}</s>
            </div>
            <div className="proinfo-body-sales">
              已售<span>450</span>件
            </div>
          </div>
        </section>
        {/* footer */}
        <nav className="tabbar">
          <div className="tabbar-left">
            <a className="tabbar-item">
              <CustomerServiceOutlined className="iconfont" />
              <p>客服</p>
            </a>
            <a onClick={this.jumpcart} className="tabbar-item">
              <ShoppingCartOutlined className="iconfont" />
              <p>购物车</p>
            </a>
          </div>
          <div className="tabbar-right">
            <a
              onClick={this.addtocart.bind(
                this,
                goodsinfo.id,
                goodsinfo.title,
                goodsinfo.nprice,
              )}
              id="addCart"
              className="tabbar-item tabbar-item-block"
            >
              加入购物车
            </a>
            <a
              onClick={this.buy.bind(
                this,
                goodsinfo.id,
                goodsinfo.title,
                goodsinfo.nprice,
              )}
              id="soonBuy"
              className="tabbar-item tabbar-item-block tabbar-item-orange"
            >
              立即购买
            </a>
          </div>
        </nav>
      </div>
    )
  }
}

export default Detail
