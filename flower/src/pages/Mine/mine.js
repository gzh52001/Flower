import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import Foot from '../../component/footer/'
import './mine.scss'
import {
    LeftOutlined, RightOutlined, AccountBookOutlined,
    PayCircleOutlined, SketchOutlined, ClockCircleOutlined,
    ScheduleOutlined, EnvironmentOutlined, CustomerServiceOutlined, QuestionCircleOutlined,
    BellOutlined, StarOutlined, ExclamationCircleOutlined, SettingOutlined
} from '@ant-design/icons'

document.addEventListener(

    'touchmove',
    function (event) {
        event.preventDefault()
    },
    { passive: false }
)
class Mine extends Component {
    state = {
        orderlist: [
            {
                name: '代付款',
                img: 'https://img02.hua.com/m/member/center/myinfo_pendingpay.png'
            },
            {
                name: '今日配送',
                img: 'https://img02.hua.com/m/member/center/myinfo_distribution.png'
            },
            {
                name: '待评价',
                img: 'https://img02.hua.com/m/member/center/myinfo_evaluation.png'
            },
        ],
        myinfolist: [
            {
                name: '优惠券',
                icon: <AccountBookOutlined />
            },
            {
                name: '权益卡',
                icon: <ScheduleOutlined />
            },
            {
                name: '余额',
                icon: <PayCircleOutlined />
            },
            {
                name: '会员积分',
                icon: <SketchOutlined />
            },
            {
                name: '收货地址',
                icon: <EnvironmentOutlined />
            },
            {
                name: '生日纪念提醒',
                icon: <BellOutlined />
            },
            {
                name: '我的收藏',
                icon: <StarOutlined />
            },
            {
                name: '浏览记录',
                icon: <ClockCircleOutlined />
            },

        ],
        setlist: [
            {
                name: '联系客服',
                icon: <CustomerServiceOutlined />
            },
            {
                name: '帮主中心',
                icon: <QuestionCircleOutlined />
            },
            {
                name: '关于花礼',
                icon: <ExclamationCircleOutlined />
            },
            {
                name: '设置',
                icon: <SettingOutlined />
            },
        ],
        username: '',
        userlogin: true,
    }

    gologin = () => {
        this.props.history.push('/login')
        // console.log(this.props)
    }

    goset = () => {
        this.props.history.push('/mine/setting')
    }
    componentDidMount() {
        let username = localStorage.getItem('floweruser');
        if (username) {
            this.setState({
                username,
                userlogin: true
            })
        } else {
            this.setState({
                username: '',
                userlogin: false
            })
        }
    }
    render() {
        const { orderlist, myinfolist, setlist, username, userlogin } = this.state
        return (
            <div className="mine">
                <div className="header">
                    <div className="hleft">
                        <LeftOutlined />
                    </div>
                    <div className="hcenter">个人中心</div>
                    <div className="hright"></div>
                </div>

                <div className="userinfo">
                    {userlogin ? <div className="info">
                        <div className="userpic">
                            <a>
                                <img src="https://img02.hua.com/pc/assets/img/avatar_default_05.jpg" />
                            </a>
                        </div>
                        <div className="lginfo">
                            <p>{username}</p>
                            <img src={require('../../img/123.png')} alt="" />
                        </div>
                    </div> : <div className="info">
                            <p>Hi,欢迎来到花礼网</p>
                            <p>
                                <a onClick={this.gologin} className="loginandreg">登陆/注册</a>
                            </p>
                        </div>}


                </div>

                <div className="myorder">
                    <div className="mohead">
                        <p>我的订单</p>
                        <p>全部订单<RightOutlined /></p>
                    </div>
                    <div className="mobody">
                        {
                            orderlist.map(item => {
                                return (
                                    <div key={item.name} className="orderitem">
                                        <a>
                                            <img src={item.img} />
                                            <p>{item.name}</p>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="myinfo">
                    <div className="mibody">
                        {myinfolist.map(item => {
                            return (
                                <div key={item.name} className="mbitem">
                                    <p className="antdicon">{item.icon}</p>
                                    <p className="txt">{item.name}</p>
                                </div>
                            )
                        })}

                    </div>
                </div>
                <div className="setting">
                    {setlist.map(item => {
                        return (
                            <div key={item.name} className="mbitem">
                                <p className="antdicon">{item.icon}</p>
                                {item.name === '设置' ?
                                    <p className="txt" onClick={this.goset}>{item.name}</p> :
                                    <p className="txt">{item.name}</p>}
                            </div>
                        )
                    })}
                </div>
                <Foot props={this.props} />
            </div>
        )
    }
}
Mine = withRouter(Mine);
export default Mine;