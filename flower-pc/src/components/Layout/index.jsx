import React, { Component } from "react"
import { withRouter } from "react-router-dom"

import { Layout, Menu, Dropdown, message, Avatar } from 'antd';
import { DownCircleOutlined } from '@ant-design/icons';
// 导入样式
import './index.scss'
import { myRoute } from "../../routes"
import { getLocal, deleteLocal } from "../../utils/local.js"
const { Header, Content, Sider } = Layout;

class Form extends Component {
    constructor() {
        super()
        this.state = {
            userinfo: {}
        }
    }
    // 下拉菜单
    menu = () => (
        <Menu onClick={this.mine}>
            <Menu.Item key='/user/mine'>
                个人中心
            </Menu.Item>
            <Menu.Item key="/user/setting">
                设置
            </Menu.Item>
            <Menu.Item danger ghost="true" key="/login">退出登录</Menu.Item>
        </Menu>
    );
    // 个人选项
    mine = ({ key }) => {
        switch (key) {
            case '/login': {
                this.props.history.push(key)
                deleteLocal('userinfo')
                message.success('退出成功！')
                break
            }
            
            case '/user/mine':{
                message.error('功能未开发！')
                break
            }
            
            case '/user/setting':{
                message.error('功能未开发！')
                break
            }
        }
    }
    handleMenu({ key }) {
        this.props.history.push(key)
    }
    componentDidMount() {
        this.setState({
            userinfo: getLocal()[0]
        })
        // console.log(getLocal()[0])
    }
    render() {
        let { userinfo } = this.state
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                    collapsible="true"
                    reverseArrow="true"
                    theme="dark"
                >
                    <div className="logo">
                        <img src={require('../../assets/images/logo.png')} alt="logo" />
                    </div>
                    <Menu theme="dark"
                        onClick={this.handleMenu.bind(this)}
                        defaultSelectedKeys={[myRoute[0].path]}
                        selectedKeys={[this.props.location.pathname]}
                    >
                        {
                            myRoute.map(item => {
                                return (
                                    <Menu.Item key={item.path} icon={item.icon}>
                                        {item.title}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header className="site-layout-background" style={{ padding: 0 }} >
                        <h1>花礼网后台管理系统</h1>
                        <Avatar src={userinfo.img}
                            style={{ position: 'absolute', top: 19, right: 89 }}
                            size="small"
                        />
                        <p className='user'
                        >帅气的：<a href={"javascript:;"} style={{ color: "#58bc58" }}>{userinfo.username}</a> &nbsp;靓仔，您好!</p>
                        {/* 下拉菜单 */}
                        <Dropdown overlay={this.menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                菜单 &nbsp; <DownCircleOutlined />
                            </a>
                        </Dropdown>,
                    </Header>
                    <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                        <div className="site-layout-background">
                            {this.props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
Form = withRouter(Form) //包装成伪路由组件
export default Form