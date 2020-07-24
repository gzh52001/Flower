import request from '../utils/http'
// 验证登入
function login(username,password){
    return request({
        method:'post',
        url:'/user/login',
        data:{
            username,
            password
        }
    })
}

export {
    login
}