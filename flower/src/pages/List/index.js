import React, { Component } from 'react'
import Foot from '../../component/footer/index'
class List extends Component {
  render() {
    return (
      <div>
        <header className="headerbar">
          <div className="headerbar-content">
            <div className="headerbar-content-left">
              <i className="iconfont iconfont-search"></i>
            </div>
            <div className="headerbar-content-center">
              <a href="">搜索鲜花、蛋糕、礼品</a>
            </div>
          </div>
        </header>
        <Foot props={this.props} />
      </div>
    )
  }
}

export default List
