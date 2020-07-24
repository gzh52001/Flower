import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Alert } from 'antd';
import './login.scss'
import { QqOutlined, WechatOutlined, MailOutlined } from '@ant-design/icons'
import axios from 'axios'
// import { withLogin } from '../../utils/hoc'
import Myhead from '../Mine/myhead';

let timer1 = undefined;
let timer2 = undefined;

class Login extends Component {
    constructor() {
        super();
        this.state = {
            userlogin: false,
            username: '',
            psw: '',
            emailok: false,
            pswok: false,
            emailerr: false,//email提示
            pswerr: false,//密码提示
        }
        this.submitreg = this.submitreg.bind(this)
    }
    tabway = () => {
        this.setState({
            userlogin: !this.state.userlogin
        })
    }
    goreg = () => {
        this.props.history.push('/reg')
    }

    //绑定数据
    pswchange = (e) => {
        this.setState({
            psw: e.target.value
        })
    }
    usernamechange = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    handleEmail(e) {//em正则
        let value = e.target.value;
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            this.setState({
                emailerr: true,
                emailok: false
            })
            this.timerStart1()
        } else {
            this.setState({
                emailok: true
            })
        }
    }
    handlepsw(e) {//psw正则
        let value = e.target.value;

        if (!(/^[0-9A-Za-z]{6,}$/.test(value))) {
            this.setState({
                pswerr: true,
                pswok: false
            })
            this.timerStart2()
        } else {
            this.setState({
                pswok: true,
                psw: value
            })
        }
    }

    componentWillUnmount() {
        clearInterval(timer1);
        clearInterval(timer2);
    }

    //邮箱err定时器
    timerStart1 = () => {
        timer1 = setInterval(() => this.record1(), 3000);
    }
    //密码err定时器
    timerStart2 = () => {
        timer2 = setInterval(() => this.record2(), 3000);
    }

    //3s关闭提示框
    record1 = () => {//邮箱
        this.setState({
            emailerr: false
        })
        clearInterval(timer1);
    }
    record2 = () => {//密码
        this.setState({
            pswerr: false
        })
        clearInterval(timer2);
    }

    //提交登陆
    // 
    async submitreg() {
        const { emailok, pswok } = this.state;
        const { username, psw } = this.state
        if (emailok && pswok) {
            axios({
                url: 'http://10.3.141.34:3000/user/login',
                method: 'post',
                data: { username, password: psw },
                // headers: {
                //     'Content-Type': 'application/x-www-form-urlencoded'
                // }
            })
                .then(response => {
                    if (response.data.meta.status === 200) {
                        localStorage.setItem('floweruser', username)
                        this.props.history.push('/mine')
                    } else {
                        alert('用户名或密码错误')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            // if (datas.flag) {
            //     localStorage.setItem('floweruser', this.state.username)
            // }
        } else {
            alert('请输入正确的邮箱和密码格式')
        }
        // console.log(emailok, psw2ok, pswok)
    }


    render() {
        const { psw, username, emailerr, pswerr } = this.state
        return (
            <div>
                <Myhead />
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
                                        <input type="text" placeholder="请输入手机号码/邮箱" value={username} onChange={this.usernamechange.bind(this)} onBlur={this.handleEmail.bind(this)} />
                                    </div>
                                    <p>密码</p>
                                    <input type="password" placeholder="请输入密码" value={psw} onChange={this.pswchange.bind(this)} onBlur={this.handlepsw.bind(this)} />
                                    <div className="getcode">忘记密码</div>
                                    <button className="loginbtn" onClick={this.submitreg}>登陆</button>
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
                {
                    emailerr ?
                        <Alert message="您输入的邮箱格式有误" type="error" showIcon className="errtip" /> : null
                }
                {
                    pswerr ?
                        <Alert message="密码必须为6位以上字母数字组合" type="error" showIcon className="errtip" /> : null
                }
            </div>
        )
    }
}
// Login = withLogin(Login)
Login = withRouter(Login)

export default Login;