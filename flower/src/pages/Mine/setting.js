import React, { Component } from 'react';
import Myhead from './myhead'
import { withRouter } from 'react-router-dom';
import { withLogin } from '../../utils/hoc'

class Setting extends Component {

    exit = () => {
        localStorage.setItem('floweruser', '');
        // console.log()
        this.props.history.push('/mine/mine')
    }
    render() {
        return (
            <div>
                <Myhead />
                <div className="setupitem">
                    <div className="itemleft">修改密码</div>
                </div>
                <div className="setupitem">
                    <div className="itemleft" onClick={this.exit}>退出</div>
                </div>
            </div>
        )
    }


}
Setting = withLogin(Setting)
Setting = withRouter(Setting)
export default Setting;