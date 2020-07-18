import React, { Component } from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import './login.scss'
import { LeftOutlined, MenuOutlined, QqOutlined, WechatOutlined, MailOutlined, HomeOutlined, UnorderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'

class Login extends Component {
    state = {
        userlogin: false,
        navlist: [
            {
                text: '首页',
                path: '/',
                icon: <HomeOutlined />
            },
            {
                text: '分类搜索',
                path: '/list',
                icon: <UnorderedListOutlined />
            },
            {
                text: '购物车',
                path: '/cart',
                icon: <ShoppingCartOutlined />
            },
            {
                text: '我的',
                path: '/mine',
                icon: <UserOutlined />
            },
        ],
        navtrue: false
    }
    tabway = () => {
        this.setState({
            userlogin: !this.state.userlogin
        })
    }
    goreg = () => {
        this.props.history.push('/reg', { props: this.props })
    }
    gopath = (path) => {
        this.props.history.push(path)
        // console.log(path)
    }
    navok = () => {
        this.setState({
            navtrue: !this.state.navtrue
        })
    }
    render() {
        const { path } = this.props.match
        const { history } = this.props
        const { navlist, navtrue } = this.state
        return (
            <div>
                <div className="header">
                    <div className="hleft" >
                        <LeftOutlined onClick={function goback() { history.goBack() }} />
                    </div>
                    <div className="hcenter">登陆注册</div>
                    <div className="hright"><MenuOutlined className="hrmenu" onClick={this.navok} /></div>

                    <ul className={navtrue ? "navlist" : "navlist top100"}>
                        {navlist.map(item => {
                            return (
                                <li key={item.path} onClick={this.gopath.bind(this, item.path)}>
                                    <i>{item.icon}</i>
                                    <p>{item.text}</p>
                                </li>
                            )
                        })}
                    </ul>


                </div>
                <div className="lglogo">
                    <img src={require('../../img/wx_login_logo.png')} />
                </div>
                <div className="login">

                    <div className="ckcode">
                        {
                            this.state.userlogin ? (
                                <>
                                    <div className="username">
                                        <p>手机号</p>
                                        <input type="text" placeholder="请输入手机号码" maxLength="11" />
                                    </div>
                                    <p>验证码</p>
                                    <input type="text" placeholder="请输入验证码" maxLength="11" />
                                    <div className="getcode">获取验证码</div>
                                    <button className="loginbtn">手机登陆/注册</button>
                                    <div onClick={this.tabway} className="tablgway">账号密码登录</div>
                                </>
                            ) : <>
                                    <div className="username">
                                        <p>手机号/邮箱</p>
                                        <input type="text" placeholder="请输入手机号码/邮箱" maxLength="11" />
                                    </div>
                                    <p>密码</p>
                                    <input type="text" placeholder="请输入密码" maxLength="11" />
                                    <div className="getcode">忘记密码</div>
                                    <button className="loginbtn">登陆</button>
                                    <div onClick={this.tabway} className="tablgway">手机短信登陆</div>
                                </>

                        }
                    </div>

                    <div className="quicklg">
                        <div className="qcway">其他登陆方式</div>
                        <div className="qclg">
                            <div className="qclgitem">
                                <i><QqOutlined className="qcicon" /></i>
                                <span>QQ</span>
                            </div>
                            <div className="qclgitem">
                                <i><WechatOutlined className="qcicon" /></i>
                                <span>微信</span>
                            </div>
                            <div className="qclgitem" onClick={this.goreg}>
                                <i><MailOutlined className="qcicon" /></i>
                                <span>邮箱注册</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login);