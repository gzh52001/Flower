import React, { Component } from 'react'
// 引入antd-mobile
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

@withRouter
class Tab extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'home',
      hidden: true,
      fullScreen: true,
    }
  }

  // 图标颜色为 #ff734c
  render() {
    return (
      <div>
        <div
          style={
            this.state.fullScreen
              ? { position: 'fixed', height: '100%', width: '100%', top: 0 }
              : { height: 400 }
          }
        >
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#58bc58"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            {/* 首页 */}
            <TabBar.Item
              title="首页"
              key="Home"
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selected={this.state.selectedTab === 'home'}
              onPress={() => {
                this.props.history.push('/home')
                this.setState({
                  selectedTab: 'home',
                })
              }}
              data-seed="logId"
            ></TabBar.Item>
            {/* 列表页 */}
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="分类"
              key="List"
              selected={this.state.selectedTab === 'list'}
              onPress={() => {
                this.props.history.push('/list')
                this.setState({
                  selectedTab: 'list',
                })
              }}
              data-seed="logId1"
            ></TabBar.Item>
            {/* 购物车 */}
            <TabBar.Item
              icon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              selectedIcon={
                <div
                  style={{
                    width: '22px',
                    height: '22px',
                    background:
                      'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat',
                  }}
                />
              }
              title="购物车"
              key="Cart"
              selected={this.state.selectedTab === 'cart'}
              onPress={() => {
                this.props.history.push('/cart')
                this.setState({
                  selectedTab: 'cart',
                })
              }}
            ></TabBar.Item>
            {/* 个人中心 */}
            <TabBar.Item
              icon={{
                uri:
                  'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg',
              }}
              selectedIcon={{
                uri:
                  'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg',
              }}
              title="我的"
              key="Mine"
              selected={this.state.selectedTab === 'mine'}
              onPress={() => {
                this.props.history.push('/mine')
                this.setState({
                  selectedTab: 'mine',
                })
              }}
            ></TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

export default Tab
