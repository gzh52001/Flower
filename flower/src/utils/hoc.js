import React from 'react';
import Login from '../pages/Login';
export function withLogin(InnerComponent) {
    class OuterComponent extends InnerComponent {
        constructor() {
            super();
            if (!this.state) {
                this.state = {}
            }
            this.state.login = false;
        }
        componentDidMount() {
            let userInfo = localStorage.getItem('floweruser');
            // console.log('userInfo', userInfo)
            if (userInfo) {
                this.setState({
                    login: true
                })
            }
        }
        render() {
            const { login } = this.state;
            if (login) {
                return super.render()
            }
            return <Login />
        }
    }
    return OuterComponent;
}