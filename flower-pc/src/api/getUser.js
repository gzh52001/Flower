import request from '../utils/http'
// 验证登入
function getUsers(){
    return request({
        method:'get',
        url:'/user/getusers',
    })
}
// 删除用户
function deleteUser(id){
    return request({
        method:'delete',
        url:'/user/delete',
        params:{
            id
        }
    })
}

export {
    getUsers,
    deleteUser
}