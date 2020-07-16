import React, { Component } from 'react';
import './mine.scss'
import { LeftOutlined } from '@ant-design/icons'

class Mine extends Component {
    render() {

        return (
            <div>
                <div className="header">
                    <div className="hleft">
                        <LeftOutlined />
                    </div>
                    <div className="hcenter"></div>
                    <div className="hright"></div>
                </div>
            </div>
        )
    }
}

export default Mine;