import React, { Component } from "react"

import { message } from 'antd';
// 样式
import "./index.scss"
// 登入请求
import { login } from "../../api/login"
import {setLocal} from '../../utils/local'

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        // this.toUser = this.toUser.bind(this)
    }
    toUser(e) {
        e.preventDefault();
        this.toAdmin()
    }
    inputChang(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 登入
    async toAdmin() {
        let { username, password } = this.state
        if (username && password) {
            try {
                let p = await login(username, password)
                // console.log(p);
                if(p.data.meta.status === 200){
                    message.success(p.data.meta.mag);
                     // 登入成功后保存localStorage
                    setLocal(p.data.result)
                    this.props.history.push('/admin')
                }else{
                    message.error(p.data.meta.mag);
                    this.setState({
                        username:'',
                        password:''
                    })
                }
            } catch (err) {
                console.log(err);
            }
        }else{
            message.error('请输入用户名！或者密码！');
        }

    }
    render() {
        let { username, password } = this.state
        return (
            <div className="bgc">
                <div className="box">
                    <h2>花礼网APP后台管理系统</h2>
                    <form>
                        <div className="inputBox">
                            <input
                                type="text"
                                required="required"
                                value={username}
                                name="username"
                                onChange={e => this.inputChang(e)}
                            />
                            <label>用户名</label>
                        </div>
                        <div className="inputBox">
                            <input
                                type="password"
                                required="required"
                                value={password}
                                name="password"
                                onChange={e => this.inputChang(e)}
                            />
                            <label>密码</label>
                        </div>
                        <input type="submit" value="登录" onClick={e => this.toUser(e)} />
                    </form>
                </div>
            </div>
        )
    }
}

export default Login