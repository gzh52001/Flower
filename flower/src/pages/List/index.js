import React, { Component } from 'react'
import Foot from '../../component/footer/index'
class List extends Component {
  render() {
    return (
      <div className="list">
        <Foot props={this.props} />
      </div>
    )
  }
}

export default List
