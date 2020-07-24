import {combineReducers} from 'redux';
import cartReducer from './cart';

// 模块化reducer
// 把多个模块reducer合并成一个reducer
const reducer = combineReducers({
    cart:cartReducer,
})

export default reducer;