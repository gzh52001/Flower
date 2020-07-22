import React, { Component } from 'react'
import './list.scss'
import Foot from '../../component/footer/index'
import { SearchOutlined } from '@ant-design/icons'
import TabPanel from './tab'
class List extends Component {
  render() {
    return (
      <div className="list">
        {/* header */}
        <div className="headerbar">
          <div className="headerbar-content">
            <div className="headerbar-content-left">
              <SearchOutlined />
            </div>
            <div className="headerbar-content-center">
              <a href="">搜索鲜花、蛋糕、礼品</a>
            </div>
          </div>
        </div>
        {/* content */}
        <section className="catebox">
          <TabPanel />
        </section>
        <Foot props={this.props} />
      </div>
    )
  }
}

export default List
