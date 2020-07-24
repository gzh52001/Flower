import React, { Component } from 'react'
import { Tabs, Select, Space } from 'antd'
import http from '../../utils/http'

const { TabPane } = Tabs
const { Option } = Select

class Demo extends Component {
  async componentDidMount() {
    const datas = await http.get('/classify', {})
    let data = datas.result[0]
    this.setState({
      data: data,
      hot: data.hot.described,
      flower: data.flower.described,
      preserved: data.preserved.described,
      cake: data.cake.described,
      present: data.present.described,
      basket: data.basket.described,
      botany: data.botany.described,
    })
  }
  state = {
    data: [],
    hot: [],
    flower: [],
    preserved: [],
    cake: [],
    present: [],
    basket: [],
    botany: [],
    tabPosition: 'left',
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition })
  }

  jinqu = (id) => {
    this.props.props.history.push('/detail?' + id)
  }

  render() {
    const {
      data,
      hot,
      flower,
      preserved,
      cake,
      present,
      basket,
      botany,
    } = this.state

    return (
      <Tabs tabPosition={this.state.tabPosition}>
        <TabPane tab="热门推荐" key="1">
          <div id="hot" name="hot" className="catebox-details-mode active">
            <header className="catebox-details-banner">
              <a className="navigation">
                <img
                  src="https://img02.hua.com/m/category/Classification/hot.png"
                  alt=""
                />
              </a>
            </header>

            <div className="catebox-details-body">
              <nav className="catebox-details-list ">
                {hot.map((item, index) => {
                  return (
                    <div
                      onClick={this.jinqu.bind(this, item.id)}
                      key={index + 1}
                      className="catebox-details-item"
                    >
                      <a className="navigation">
                        <img
                          className="catebox-details-item-pic"
                          src={item.title}
                          alt={item.img}
                        />
                        <p className="catebox-details-item-desc">{item.img}</p>
                      </a>
                    </div>
                  )
                })}
              </nav>
            </div>
          </div>
        </TabPane>
        <TabPane tab="鲜花" key="2">
          <article
            id="flower"
            name="flower"
            className="catebox-details-mode active"
          >
            <header className="catebox-details-banner">
              <a className="navigation" href="/flower/">
                <img
                  src="https://img02.hua.com/m/category/Classification/flower.png?v"
                  alt=""
                />
              </a>
            </header>

            {flower.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right">
                      <a className="navigation">
                        <i className="iconfont iconfont-trophy"></i>
                        {item.name}
                      </a>
                    </div>
                  </div>

                  <nav className="catebox-details-list ">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id)}
                          key={index + 1}
                          className="catebox-details-item"
                        >
                          <a className="navigation">
                            {ite.id >= 56 ? (
                              <p className="catebox-details-item-desc">
                                {ite.title}
                              </p>
                            ) : (
                                <img
                                  className="catebox-details-item-pic"
                                  src={ite.title}
                                  alt={ite.img}
                                />
                              )}
                          </a>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}

            {/*  */}

            {/*  */}
          </article>
        </TabPane>
        <TabPane tab="永生花" key="3">
          <article id="ppf" name="ppf" className="catebox-details-mode active">
            <header className="catebox-details-banner">
              <a className="navigation">
                <img
                  src="https://img02.hua.com/m/category/Classification/ppf.png?v"
                  alt=""
                />
              </a>
            </header>

            {preserved.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right">
                      <a className="navigation">
                        <i className="iconfont iconfont-trophy"></i>
                        {item.name}
                      </a>
                    </div>
                  </div>

                  <nav className="catebox-details-list ">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id)}
                          key={index + 1}
                          className="catebox-details-item"
                        >
                          <a className="navigation">
                            <img
                              className="catebox-details-item-pic"
                              src={ite.title}
                              alt={ite.img}
                            />
                            <p className="catebox-details-item-desc">
                              {ite.img}
                            </p>
                          </a>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </article>
        </TabPane>
        <TabPane tab="蛋糕" key="4">
          <article
            id="cake"
            name="cake"
            className="catebox-details-mode active"
          >
            <header className="catebox-details-banner">
              <a className="navigation" href="/cake/">
                <img
                  src="https://img02.hua.com/m/category/Classification/cake.png"
                  alt=""
                />
              </a>
            </header>
            {cake.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right"></div>
                  </div>

                  <nav className="catebox-details-list catebox-details-list-square">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id)}
                          key={index + 1}
                          className="catebox-details-row"
                        >
                          <div className="catebox-details-item">
                            <a className="navigation">
                              <img
                                className="catebox-details-item-pic"
                                src={ite.title}
                              />
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </article>
        </TabPane>
        <TabPane tab="特色礼品" key="5">
          <article
            id="gift"
            name="gift"
            className="catebox-details-mode active"
          >
            <header className="catebox-details-banner">
              <a className="navigation" href="/gifts/shoushi/">
                <img
                  src="https://img02.hua.com/m/category/Classification/gift.png?v"
                  alt=""
                />
              </a>
            </header>
            {present.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right"></div>
                  </div>

                  <nav className="catebox-details-list catebox-details-list-square">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id)}
                          key={index + 1}
                          className="catebox-details-row"
                        >
                          <div className="catebox-details-item">
                            <a className="navigation">
                              <img
                                className="catebox-details-item-pic"
                                src={ite.title}
                              />
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </article>
        </TabPane>
        <TabPane tab="礼篮" key="6">
          <article
            id="flowerbasket"
            name="flowerbasket"
            className="catebox-details-mode active"
          >
            <header className="catebox-details-banner">
              <a className="navigation" href="/giftsBasket/">
                <img
                  src="https://img02.hua.com/m/category/Classification/hamper.png"
                  alt=""
                />
              </a>
            </header>
            {basket.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right"></div>
                  </div>

                  <nav className="catebox-details-list ">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id)}
                          key={index + 1}
                          className="catebox-details-item"
                        >
                          <a className="navigation">
                            <img
                              className="catebox-details-item-pic"
                              src={ite.title}
                              alt={ite.img}
                            />
                            <p className="catebox-details-item-desc">
                              {ite.img}
                            </p>
                          </a>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </article>
        </TabPane>
        <TabPane tab="植物花卉" key="7">
          <article
            id="plant"
            name="plant"
            className="catebox-details-mode active"
          >
            <header className="catebox-details-banner">
              <a className="navigation" href="/duorouzhiwupenzai/">
                <img
                  src="https://img02.hua.com/m/category/Classification/plants.png?v"
                  alt=""
                />
              </a>
            </header>
            {botany.map((item, index) => {
              return (
                <div key={index + 1} className="catebox-details-body">
                  <div className="catebox-details-title">
                    <h4 className="catebox-details-title-left">
                      {item.header}
                    </h4>
                    <div className="catebox-details-title-right"></div>
                  </div>

                  <nav className="catebox-details-list ">
                    {item.good.map((ite, index) => {
                      return (
                        <div
                          onClick={this.jinqu.bind(this, ite.id, this.props)}
                          key={index + 1}
                          className="catebox-details-item"
                        >
                          <a className="navigation">
                            <img
                              className="catebox-details-item-pic"
                              src={ite.title}
                              alt={ite.img}
                            />
                            <p className="catebox-details-item-desc">
                              {ite.img}
                            </p>
                          </a>
                        </div>
                      )
                    })}
                  </nav>
                </div>
              )
            })}
          </article>
        </TabPane>
      </Tabs>
    )
  }
}

export default Demo
