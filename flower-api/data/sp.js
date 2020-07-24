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
        let ll = $(ele).find('.catebox-menu-item-link').attr('href')
        let url2 = "https://m.hua.com/" + ll
        request(url2, (err, res, body) => {
            let $ = cheerio.load(body, { decodeEntities: false })
            $('.product-list .product-item').each((index, ele) => {
                let lll = $(ele).find('a').attr('href')
                let url3 = "https://m.hua.com/" + lll
                request(url3, (err, res, body) => {
                    let $ = cheerio.load(body, { decodeEntities: false })
                    let obj = {
                        "img": [],
                        "select": [],
                        "photo": []
                    }
                    let obj2 = {}
                    obj.title = $('.proinfo-head .proinfo-head-title').text()
                    obj.text = $('.proinfo-head .proinfo-head-title .text-orange').text()
                    obj.nprice = $('.proinfo-body .proinfo-body-price .proinfo-body-price-sjg').text()
                    obj.oprice = $('.proinfo-body .proinfo-body-price .proinfo-body-price-jg').text()
                    obj.out = $('.proinfo-body .proinfo-body-sales span').text()
                    $('.detailsinfo .detailsinfo-item').each((index, ele) => {
                        obj2.title= $(ele).find('.detailsinfo-item-title').html()
                        obj2.text= $(ele).find('.detailsinfo-item-desc').html()
                        obj.select.push(obj2)
                    })
                    $('.swiper-wrapper .swiper-slide').each((index, ele) => {
                        if($(ele).find('img').attr('src').startsWith('https')){
                            obj.img.push($(ele).find('img').attr('src'))
                        }else{
                            obj.img.push("https:"+$(ele).find('img').attr('src'))
                        }
                    })
                    $('.panel-body .proimgdetails img').each((index,ele)=>{
                        obj.photo.push($(ele).attr('src'))
                    })  
                    arr.push(obj)
                    //写入文件中
                    let writeStream = fs.createWriteStream('./datalist.json');
                    let str = JSON.stringify(arr);
                    writeStream.write(str);//写入文档中
                    writeStream.end();
                    writeStream.on('finish', () => {
                        console.log('写入成功');
                        fs.readFile('./datalist.json', (err, data) => {
                            console.log(data.toString());
                        })
                    });
                })
            })
        })
    })
})