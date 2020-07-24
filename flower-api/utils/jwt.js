const jwt = require('jsonwebtoken')

let secret = '2001'
// 创建密文
function create(data,expiresIn = 60*60*24*7){
    let token = jwt.sign({data},secret,{expiresIn})
    return token
}

// 返回密文对比结果
function verify(token){
    let res
    try{
        let result = jwt.verify(token,secret) 
        console.log('token校验',result);
        res=true
    }catch{
        res=false
    }
    return res
}

module.exports = {
    create,
    verify
}