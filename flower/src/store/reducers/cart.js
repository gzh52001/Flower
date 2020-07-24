import { ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, CHANGE_QTY, GET_FROM_CART } from '../actions/cart'
import axios from 'axios'
// 初始状态
const initState = {
    cartlist: [],
    totalPrice: 0,
    step: 0
}

// reducer
// 作用: 指定state的修改逻辑：创建一个新state的并返回（覆盖旧数据）

function reducer(state = initState, action) {
    switch (action.type) {

        // 添加商品
        case ADD_TO_CART:
            // 返回一个新的State，这个state会自动覆盖store中的旧数据
            return {
                ...state,
                cartlist: [action.goods, ...state.cartlist]
            }
        // 删除商品
        case REMOVE_FROM_CART:
            axios({
                url: 'http://10.3.141.34:3000/cart/delete',
                method: 'delete',
                params: { id: action.id },
            })
                .then(response => {
                    if (response.data.meta.status === 200) {
                        return Object.assign({}, state, { cartlist: state.cartlist.filter(item => item.id != action.id) })

                    } else {
                        alert('删除失败')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        // console.log(state.cartlist.filter(item => item.id != action.id))


        // 修改数量
        case CHANGE_QTY:
            return {
                ...state,
                cartlist: state.cartlist.map(item => {
                    if (item.id === action.id) {
                        item.goods_qty = action.goods_qty
                    }
                    return item;
                })
            }

        // 清空商品
        case CLEAR_CART:
            return {
                ...state,
                cartlist: []
            }

        case GET_FROM_CART:
            const newState = JSON.parse(JSON.stringify(state));
            newState.cartlist = action.data;
            // console.log(newState)
            if (newState.cartlist) {
                return {
                    ...state,
                    cartlist: state.cartlist.concat(newState.cartlist)
                }
            } else {
                return {
                    ...state
                }
            }



        default:
            return state;
    }
}

export default reducer;