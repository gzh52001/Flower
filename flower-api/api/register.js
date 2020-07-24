var express = require('express');
var router = express.Router();
let mongo = require("../utils/mongod.js")
// 查询首页信息
router.post('/', (req, res) => {
    let { username, password } = req.body
    let person = {
        username,
        password,
        img: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2714684979,4095105124&fm=11&gp=0.jpg",
        time: Date.now()
    }
    mongo({
        collectionName: "userinfo",
        success: async (loc, client) => {
            let info
            if (username && password) {
                let my = await loc.insertOne(person)
                if (my.insertedCount > 0) {
                    info = ({
                        meta: {
                            status: 200,
                            mag: '注册成功！',
                        },
                        result: null
                    })
                }else {
                    info = ({
                        meta: {
                            status: 403,
                            mag: '注册失败！请联系管理员！',
                        },
                        result: null
                    })
                }
            } else {
                info = ({
                    meta: {
                        status: 400,
                        mag: '注册失败！请输入用户名或者密码！',
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