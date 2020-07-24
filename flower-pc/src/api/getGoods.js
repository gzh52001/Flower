import request from '../utils/http'
// 商品数
function getGoods(){
    return request({
        method:'get',
        url:'/getgoods',
    })
}

// 购物车商品 
function getCart(){
    return request({
        method:'get',
        url:'/cart/get',
    })
}
export {
    getGoods,
    getCart
}