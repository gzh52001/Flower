var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.post('/', (req, res) => {
    let {username,password} = req.body
    mongo({
        collectionName: "userinfo",
        success: (loc,client) => {
            loc.find({username,password}).toArray((err, result) => {
                let info
                if(result.length > 0) {
                    info = ({
                        meta: {
                            status: 200,
                            mag: '登入成功！',
                        },
                        result
                    })  
                    
                }else{
                    info = ({
                        meta: {
                            status: 400,
                            mag: '登入失败！用户名或密码错误！',
                        },
                        result:null
                    })
                }
                res.json(info)
                client.close()
            })
        },
        error: err => {
            res.json({
                meta: {
                    status: 404,
                    mag: '操作失败！',
                },
                data:null
            })
        },
    })
})

module.exports = router