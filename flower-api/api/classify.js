var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.get('/', (req, res) => {
    let info
    mongo({
        collectionName: "classify",
        success: (loc,client) => {
            loc.find({}).toArray((err, result) => {
                let info
                if(result.length > 0) {
                    info = ({
                        meta: {
                            status: 200,
                            mag: '查询成功',
                        },
                        result
                    })
                    
                }else{
                    info = ({
                        meta: {
                            status: 400,
                            mag: '查询失败！',
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