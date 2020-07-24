import React, { Component } from "react"
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

class Loading extends Component {
    constructor() {
        super()
        this.state = {}
    }
    render() {
        return (
            <Spin indicator={antIcon} />
        )
    }
}
export default Loading