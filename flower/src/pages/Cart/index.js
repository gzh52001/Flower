import React, { Component } from 'react';
import Myhead from '../Mine/myhead';
import { withLogin } from '../../utils/hoc'
import './cart.scss'
import http from '../../utils/http.js'
import Foot from '../../component/footer/'
import store from '../../store/index'
class Cart extends Component {
    constructor() {
        super();
        this.state = {
            spcart: [],
            youlike: []
        }

    }

    async componentDidMount() {
        const datas = await http.get('/cart/youlike');
        let data = store.getState()
        this.setState({
            youlike: datas.result[0].and,
            spcart: data.cart.cartlist
        })
        // console.log(datas)
    }

    numchange = () => {
        console.log(123)
    }

    render() {
        const { spcart, youlike } = this.state
        // const { cartlist } = spcart.cart
        // console.log('this.state=', spcart);
        return (
            <div>
                <Myhead />
                {spcart.length ?
                    <ul className="cartlist">{
                        spcart.map(item => {
                            return (

                                <li className="cartitem">
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
                        合计<em>￥123</em>
                    </span>
                    <button className="footright">去结算</button>
                </div>
            </div>
        )
    }
}

// Cart = withLogin(Cart)
export default Cart;