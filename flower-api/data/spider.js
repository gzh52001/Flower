const request = require('request');//node的第三方模块：用于发送ajax
const cheerio = require('cheerio');//类似jq的模块，第三方模块，需要安装 npm i cheerio -S
const fs = require('fs');//node的内置模块：文件读写
const path = require('path');//node的内置模块：路径操作

let url = "https://m.hua.com/all.html"
request({
    url,
    encoding: "utf-8"
}, (err, res, body) => {  //body指的就是本网页
    let $ = cheerio.load(body, { decodeEntities: false })
    let arr = []
    $('.catebox-menu .catebox-menu-item').each((index, ele) => {
        let obj = {}
        obj.id = index + 1
        obj.title = $(ele).find('a').html()
        let url2 = $(ele).find('a').attr('href')

        if (url2.startsWith('#')) { //字符串ES5新增方法 判断字符串是否以xx开头
            url2 = "https://m.hua.com/all.html" + url2
            //第二次请求：耳机页面的body
            request(url2, (err, res, body) => {
                let $ = cheerio.load(body,{ decodeEntities: false })
                let arr2 = []
                let arr3 = []
                let obj2 = {}
                $('.catebox-details-mode').each((index, ele) => {
                    arr2.push($(ele).find('.catebox-details-banner .navigation img').attr('src'))
                    obj2.text = $(ele).find('.catebox-details-body .catebox-details-list .catebox-details-item .navigation .catebox-details-item-desc').html()
                    obj2.img = $(ele).find('.catebox-details-body .catebox-details-list .catebox-details-item .navigation img').attr('src')
                    console.log(obj2.text);
                    arr3.push(obj2)
                })
                obj.img = arr2[index]
                obj.described  = arr3
                arr.push(obj)
                //写入文件中
                let writeStream = fs.createWriteStream('./datalist.json');
                let str = JSON.stringify(arr);
                writeStream.write(str);//写入文档中
                writeStream.end();
                writeStream.on('finish', () => {
                    console.log('写入成功');
                    fs.readFile('./datalist.json', (err, data) => {
                        // console.log(data.toString());
                    })
                });
            })
        }
    })


})