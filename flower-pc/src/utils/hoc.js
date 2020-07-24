import React from "react"
import { Route, withRouter } from "react-router-dom"
import { Login } from "../views"

export function withLogin(inComponent) {
    return class outComponent extends inComponent {
        constructor() {
            super()
            // this.state = {
            //     login: false   //--> //继承这么写容易被覆盖
            // }
            this.state ? this.state.login = false : this.state = {} //-->判断继承是否有this.state

        }
        componentDidMount() {
            let userInfo = JSON.parse(localStorage.getItem('userinfo'))
            if (userInfo) {
                this.setState({
                    login: true
                })
            } else {
                this.props.history.push('/login')
            }

            //    super.componentDidMount() //注：这里会替换父类的钩子，若父类有钩子，请在这边再调用一次
        }
        render() {
            // 判断localStorage是否有userInfo
            let { login } = this.state
            // console.log(login);
            if (login) {
                return super.render()  //super指向父类
            }
            return <Route path='/login' component={login} />
        }
    }
}