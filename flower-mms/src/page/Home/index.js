import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './home.scss'
import {
    DesktopOutlined,
    HomeOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
class Home extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
        }
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        return (
            <div >
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                                首页
                        </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Goods">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} >
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                欢迎访问鲜花网管理系统
                            </div>
                        </Header >
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                            </Breadcrumb>

                        </Content>

                    </Layout>
                </Layout>
            </div>
        )
    }

}

export default Home;



