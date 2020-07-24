var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.get('/', (req, res) => {
    mongo({
        collectionName: "userinfo",
        success: (loc, client) => {
            loc.find({}).toArray((err, result) => {
                let info
                try {
                    if (result.length > 0) {
                        info = ({
                            meta: {
                                status: 200,
                                mag: '查询成功',
                            },
                            result
                        })
                    }
                } catch (err) {
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
                data: null
            })
        },
    })
})

module.exports = router