var express = require('express');
var router = express.Router();
// 引入查询_id
var ObjectID = require('mongodb').ObjectID;

let mongo = require("../utils/mongod.js")
// 查询首页信息
router.delete('/', (req, res) => {
    let { id } = req.query
    mongo({
        collectionName: "userinfo",
        success: async (loc, client) => {
            let info
            if (id) {
                let dte = await loc.findAndRemove({ "_id": new ObjectID(id) })
                if (dte.ok == 1) {
                    info = ({
                        meta: {
                            status: 200,
                            mag: '成功删除！',
                        },
                        result: null
                    })
                } else {
                    info = ({
                        meta: {
                            status: 400,
                            mag: '删除失败',
                        },
                        result: null
                    })
                }
            } else {
                info = ({
                    meta: {
                        status: 400,
                        mag: '删除失败',
                    },
                    result: null
                })
            }
            res.json(info)
            client.close()
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