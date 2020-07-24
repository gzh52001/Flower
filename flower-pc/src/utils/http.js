import React from 'react'
import axios from 'axios'

// import { Spin } from 'antd';
// import { LoadingOutlined } from '@ant-design/icons';


const request = axios.create({
    baseURL:'//10.3.141.34:3000',
    // baseURL:'//localhost:3000',
    timeout:3000,
})

// // axios拦截器,请求之前的拦截器
// request.interceptors.request.use(config=>{
//     return config
// })

// // axios的响应拦截器
// request.interceptors.response.use(res=>{
//     if(res.meta.states === 200){

//     }
// })
export default request