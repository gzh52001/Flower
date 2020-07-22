import React, { Component } from 'react';
import Myhead from '../Mine/myhead';
import { withLogin } from '../../utils/hoc'
import './cart.scss'
import http from '../../utils/http.js'
import Foot from '../../component/footer/'
import store from '../../store/index'
import { connect } from 'react-redux';
import {change,remove} from '../../store/actions/cart'

const mapStateToProps = state => {
    return {
        cartlist: state.cart.cartlist,
        totalPrice: state.cart.cartlist.reduce((prev, item) => prev + item.goods_price * item.goods_qty, 0)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem(id) {
            dispatch(remove(id))
        },
        change(id, qty) {
            dispatch(change(id, qty))
        },
        changeQtyAsync(goods_id, goods_qty) {
            dispatch({
                type: 'CHANGE_QTY_ASYNC',
                payload: { goods_id, goods_qty }
            })
        }
    }
}


@connect(mapStateToProps,mapDispatchToProps)
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            spcart: {
                cartlist: []
            },
            youlike: []
        }

    }

    async componentDidMount() {
        const datas = await http.get('/cart/youlike');
        let data = store.getState()
        this.setState({
            youlike: datas.result[0].and,
            spcart: data.cart
        })
        console.log(this.state.spcart.cartlist.length)
    }

    numchange = () => {
        console.log(123)
    }

    render() {
        const { spcart, youlike } = this.state
        // const { cartlist } = spcart.cart
        // console.log('this.state=', spcart);
        return (
            // <div>11</div>
            <div>
                <Myhead />
                {spcart.cartlist.length ?
                    <ul className="cartlist">{
                        spcart.cartlist.map(item => {
                            return (

                                <li key={item.goods_image} className="cartitem">
                                    <input type="checkbox" className="ckbox" />
                                    <div className="goodsinfo">
                                        <img src={item.goods_image} alt="" />
                                        <div className="info">
                                            <p className="title">{item.goods_name}</p>

                                            <div className="num">
                                                <p>数量</p>
                                                <input type="button" value="-" />
                                                <input type="text" value={item.goods_qty} onChange={this.numchange} className="goodsnum" />
                                                <input type="button" value="+" />
                                            </div>
                                            <p className="price">￥{item.goods_price}</p>
                                        </div>
                                    </div>
                                </li>

                            )
                        })
                    }

                    </ul>
                    :
                    <div className="emptycart">
                        <img src="https://img02.hua.com/m/Shopping/m_shopping_empty_cart.png?v2" />
                        <p className="text">购物车内暂无商品</p>
                        <p className="gohome">去逛逛</p>
                    </div>
                }
                <div className="guess">
                    <div className="title">猜你喜欢</div>
                    <div className="guesslist">
                        {
                            youlike.map(item => {
                                // console.log(item)
                                return (
                                    <div key={item.img} className="listitem">
                                        <a href="">
                                            <div className="imgbox">
                                                <img src={item.img} />
                                            </div>
                                            <div className="detail">
                                                <div className="deinfo">
                                                    <span>{item.text1}/</span>
                                                    <i>{item.text2}</i>
                                                </div>
                                                <div className="deprice">{item.price}</div>
                                            </div>
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="cartfoot">
                    <span className="footleft">
                        合计<em>￥{spcart.totalPrice}</em>
                    </span>
                    <button className="footright">去结算</button>
                </div>
            </div>
        )
    }
}

// Cart = withLogin(Cart)
export default Cart;