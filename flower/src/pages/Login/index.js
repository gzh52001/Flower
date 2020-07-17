import React, { Component } from 'react';
import './login.scss'
import { LeftOutlined, MenuOutlined, QqOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons'
class Login extends Component {
    state = {
        userlogin: false
    }
    tabway = () => {
        this.setState({
            userlogin: !this.state.userlogin
        })
    }
    render() {

        return (
            <div>
                <div className="header">
                    <div className="hleft">
                        <LeftOutlined />
                    </div>
                    <div className="hcenter">登陆注册</div>
                    <div className="hright"><MenuOutlined className="hrmenu" /></div>

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
                            <div className="qclgitem">
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

export default Login;