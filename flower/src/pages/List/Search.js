import React, { Component } from 'react';
import './search.scss'
class List extends Component {
    render() {

        return (
            <div className="search">
                <div className="scleft"></div>
                <div className="sccenter">
                    <input type="search" autofocus="autofocus" placeholder="苏醒玫瑰" />
                </div>
                <div className="scright">搜索</div>
            </div>
        )
    }
}

export default List;