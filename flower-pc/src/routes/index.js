import React from "react"
import {
    Login,
    Home,
    User,
    Indent,
    Goods,
    Nothing
} from '../views'

import {
    HomeOutlined,
    BarChartOutlined,
    UserOutlined,
    ShoppingCartOutlined,
} from '@ant-design/icons';

export const adminRoute = [
    {
        "title": "登入",
        "path": '/login',
        "component": Login
    },
    {
        "title": "404",
        "path": '/404',
        "component": Nothing
    }
]

export const myRoute = [
    {
        "title": "首页",
        "path": '/admin/home',
        "icon": <HomeOutlined />,
        "component": Home
    },
    {
        "title": "用户列表",
        "path": '/admin/user',
        "icon": <UserOutlined />,
        "component": User
    },
    {
        "title": "商品列表",
        "path": '/admin/goods',
        "icon": <ShoppingCartOutlined />,
        "component": Goods,
        "exact": true
    },
    {
        "title": "订单列表",
        "path": '/admin/indent',
        "icon": <BarChartOutlined />,
        "component": Indent
    },
]