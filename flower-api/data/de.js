const request = require('request');//node的第三方模块：用于发送ajax
const cheerio = require('cheerio');//类似jq的模块，第三方模块，需要安装 npm i cheerio -S
const fs = require('fs');//node的内置模块：文件读写
const path = require('path');//node的内置模块：路径操作

let url = "https://m.hua.com/product/9012471.html?huaPid=%2Faiqingxianhua%2F-9012471"
request({
    url,
    encoding: "utf-8"
}, (err, res, body) => {  //body指的就是本网页
    let $ = cheerio.load(body, { decodeEntities: false })
    let arr =[]
    let obj = {
        "banner": [],
        "select": [],
        "photo": []
    }
    let obj2 = {}
    obj.title = $('.proinfo-head .proinfo-head-title').text()
    obj.text = $('.proinfo-head .proinfo-head-title .text-orange').text()
    obj.nprice = $('.proinfo-body .proinfo-body-price .proinfo-body-price-sjg').text()

    console.log($('.proinfo .proinfo-body .proinfo-body-price .proinfo-body-price-sjg').html());

    obj.oprice = $('.proinfo-body .proinfo-body-price .proinfo-body-price-jg').text()
    obj.out = $('.proinfo-body .proinfo-body-sales span').text()
    $('.detailsinfo .detailsinfo-item').each((index, ele) => {
        obj2.title = $(ele).find('.detailsinfo-item-title').html()
        obj2.text = $(ele).find('.detailsinfo-item-desc').html()
        obj.select.push(obj2)
    })
    $('.swiper-wrapper .swiper-slide').each((index, ele) => {
        if ($(ele).find('img').attr('src').startsWith('https')) {
            obj.banner.push($(ele).find('img').attr('src'))
        } else {
            obj.banner.push("https:" + $(ele).find('img').attr('src'))
        }
    })
    $('.panel-body .proimgdetails img').each((index, ele) => {
        if($(ele).attr('data-original').startsWith('https')){
            obj.photo.push($(ele).attr('data-original'))
        }else{
            obj.photo.push("https:"+$(ele).attr('data-original'))
        }
        
    })
    arr.push(obj)
    //写入文件中
    let writeStream = fs.createWriteStream('./datalist1.json');
    let str = JSON.stringify(arr);
    writeStream.write(str);//写入文档中
    writeStream.end();
    writeStream.on('finish', () => {
        console.log('写入成功');
        fs.readFile('./datalist1.json', (err, data) => {
            // console.log(data.toString());
        })
    });
})