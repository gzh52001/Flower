var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.post('/', (req, res) => {
    let { id, title, number, img, price } = req.body
    let good = {
        id,
        title,
        number,
        img,
        price,
        status: false,
        time: Date.now()
    }
    mongo({
        collectionName: "cart",
        success: async (loc, client) => {
            let info
            if (id && number && img && price && title) {
                let my = await loc.insertOne(good)
                if (my.insertedCount > 0) {
                    info = ({
                        meta: {
                            status: 200,
                            mag: '添加成功！',
                        },
                        result: null
                    })
                } else {
                    info = ({
                        meta: {
                            status: 400,
                            mag: '添加失败！请查看参数',
                        },
                        result: null
                    })
                }
            } else {
                info = ({
                    meta: {
                        status: 400,
                        mag: '添加失败！请查看参数',
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