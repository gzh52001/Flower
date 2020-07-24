var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.get('/', (req, res) => {
    let {username} = req.query
    mongo({
        collectionName: "userinfo",
        success: (loc,client) => {
            loc.find({username}).toArray((err, result) => {
                let info
                if(result.length > 0) {
                    info = ({
                        meta: {
                            status: 400,
                            mag: '该用户名已注册！',
                        },
                        result:null
                    })
                    
                }else{
                    info = ({
                        meta: {
                            status: 200,
                            mag: '恭喜允许注册！',
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