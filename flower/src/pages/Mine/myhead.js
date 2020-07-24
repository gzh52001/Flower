import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { LeftOutlined, MenuOutlined, HomeOutlined, UnorderedListOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons'
class Myhead extends Component {
    state = {
        navtrue: false,
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
        headname: ''
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

    componentDidMount() {
        const { path } = this.props.match;
        if (path === '/login') {
            this.setState({
                headname: '登陆注册'
            })
        } else if (path === '/mine/setting') {
            this.setState({
                headname: '设置'
            })
        } else if (path === '/reg') {
            this.setState({
                headname: '注册'
            })
        } else if (path === '/cart') {
            this.setState({
                headname: '购物车'
            })
        }
    }
    render() {

        const { history } = this.props
        const { navlist, navtrue, headname } = this.state
        return (
            <div>
                <div className="header">
                    <div className="hleft" >
                        <LeftOutlined onClick={function goback() { history.goBack() }} />
                    </div>
                    <div className="hcenter">{headname}</div>
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
            </div>
        )
    }
}
Myhead = withRouter(Myhead)

export default Myhead;