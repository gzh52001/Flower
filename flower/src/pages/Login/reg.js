import React, { Component } from 'react'
import { Alert } from 'antd';
import Myhead from '../Mine/myhead'
import http from '../../utils/http'
import axios from 'axios'

let timer1 = undefined;
let timer2 = undefined;
let timer3 = undefined;
class reg extends Component {
    constructor() {
        super();
        this.state = {
            emailerr: false,//email提示
            pswerr: false,//密码提示
            psw2: false,//确认密码提示
            emailok: false,
            pswok: false,
            psw2ok: false,
            username: '',
            psw: ''
        }
        this.submitreg = this.submitreg.bind(this)
    }
    async handleEmail(e) {//em正则
        let value = e.target.value;
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
            this.setState({
                emailerr: true,
                emailok: false
            })
            this.timerStart1()
        } else {
            const datas = await http.get('/user/verify', {
                username: this.state.username
            });
            if (datas.meta.status === 200) {
                this.setState({
                    emailok: true
                })
            } else {
                alert('用户名已被注册')
            }

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
    handlepswagain(e) {//psw正则
        let value = e.target.value;
        let { psw } = this.state
        if (value != psw) {
            this.setState({
                psw2: true,
                psw2ok: false
            })
            this.timerStart3();
        } else {
            this.setState({
                psw2ok: true
            })
            // console.log(this.state.psw2ok)
        }
    }

    //清除定时器
    componentWillUnmount() {
        clearInterval(timer1);
        clearInterval(timer2);
        clearInterval(timer3);
    }

    //邮箱err定时器
    timerStart1 = () => {
        timer1 = setInterval(() => this.record1(), 3000);
    }
    //密码err定时器
    timerStart2 = () => {
        timer2 = setInterval(() => this.record2(), 3000);
    }
    //确认密码err定时器
    timerStart3 = () => {
        timer3 = setInterval(() => this.record3(), 3000);
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
    record3 = () => {//密码
        this.setState({
            psw2: false
        })
        clearInterval(timer3);
    }

    //提交注册
    async submitreg() {
        const { emailok, psw2ok, pswok } = this.state;
        const { username, psw } = this.state
        if (emailok && psw2ok && pswok) {
            axios({
                url: 'http://10.3.141.34:3000/user/register',
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

    //绑定psw数据
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
    render() {
        const { history } = this.props
        const { emailerr, pswerr, psw2, psw, username } = this.state
        return (
            <div >
                <Myhead />
                <div className="reginfo login">
                    <div className="username">
                        <p>邮箱</p>
                        <input type="text" placeholder="请输入邮箱" value={username} onChange={this.usernamechange.bind(this)} onBlur={this.handleEmail.bind(this)} />
                    </div>
                    <p>密码</p>
                    <input type="password" placeholder="请输入密码" value={psw} onChange={this.pswchange.bind(this)} onBlur={this.handlepsw.bind(this)} />
                    <p>确认密码</p>
                    <input type="password" placeholder="请再次输入密码" onBlur={this.handlepswagain.bind(this)} />
                    <button className="loginbtn" onClick={this.submitreg}>注册邮箱账号</button>
                    <div onClick={function goback() {
                        history.goBack()
                    }} className="tablgway tbw">返回登陆</div>
                </div>
                {
                    emailerr ?
                        <Alert message="您输入的邮箱格式有误" type="error" showIcon className="errtip" /> : null
                }
                {
                    pswerr ?
                        <Alert message="密码必须为6位以上字母数字组合" type="error" showIcon className="errtip" /> : null
                }
                {
                    psw2 ?
                        <Alert message="两次密码必须一致" type="error" showIcon className="errtip" /> : null
                }
            </div >
        )

    }
}

export default reg