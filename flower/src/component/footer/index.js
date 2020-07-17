import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom'
import { HomeOutlined, UnorderedListOutlined, ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons'


function foot(props) {
    const menu = [{
        text: '首页',
        path: '/home',
        icon: <HomeOutlined />
    }, {
        text: '列表',
        path: '/list',
        icon: <UnorderedListOutlined />
    }, {
        text: '购物车',
        path: '/cart',
        icon: <ShoppingCartOutlined />
    },
    {
        text: '我的',
        path: '/mine',
        icon: <SmileOutlined />
    }];

    const goto = (path) => {
        // console.log(props)
        props.props.history.push(path);
        // console.log(props)
    }
    return (
        <ul className="foot">
            {menu.map(item => {
                return (
                    <li key={item.text} onClick={goto.bind(null, item.path)}>
                        <i>{item.icon}</i>
                        <p>{item.text}</p>
                    </li>
                )
            })}
        </ul>
    );
}
export default foot; //<App/>
