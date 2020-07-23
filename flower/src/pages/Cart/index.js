import React, { Component } from 'react';
import Myhead from '../Mine/myhead';
import { withLogin } from '../../utils/hoc'
import { DeleteOutlined } from '@ant-design/icons'
import './cart.scss'
import http from '../../utils/http.js'
import { InputNumber } from 'antd';
import { connect } from 'react-redux';
import { remove } from '../../store/actions/cart'

const mapStateToProps = state => {
    return {
        cartlist: state.cart.cartlist,
        totalPrice: state.cart.cartlist.reduce((prev, item) => prev + item.goods_price * item.goods_qty, 0)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        removeItem(goods_id) {
            dispatch(remove(goods_id))
        },
        changeQty(goods_id, goods_qty) {
            dispatch({
                type: 'CHANGE_QTY',
                goods_id,
                goods_qty
            })
        }
    }
}


@connect(mapStateToProps, mapDispatchToProps)


class Cart extends Component {
    constructor() {
        super();
        this.state = {
            youlike: [],
            cartlist2: []
        }

    }

    async componentDidMount() {
        const datas = await http.get('/cart/youlike');
        let arr = []
        for (let i = 0; i < this.props.cartlist.length; i++) {
            // obj1 = Object.assign(this.props.cartlist[i], this.props.cartlist[i + 1])
            arr.push(Object.assign(this.props.cartlist[i], { ckbox: false }))
        }
        this.setState({
            youlike: datas.result[0].and,
            cartlist2: arr
        })
        console.log(this.state.cartlist2)
        // console.log('this.props=', this.props)
        // console.log('this.state=', this.state)



    }

    gohome = () => {
        this.props.history.push('/home')
    }

    ckboxchang = (idx) => {
        this.setState({
            cartlist2: this.state.cartlist2.map((item, index) => index === idx ? { ...item, ckbox: !this.state.cartlist2[idx].ckbox } : item)
        })
    }


    render() {
        const { youlike, cartlist2 } = this.state
        const { removeItem, changeQty, totalPrice, cartlist } = this.props;
        // console.log(cartlist2)
        return (
            // <div>11</div>
            <div>
                <Myhead />
                {cartlist2.length ?
                    <ul className="cartlist">{
                        cartlist2.map((item, index) => {
                            return (

                                <li key={item.goods_image} className="cartitem">
                                    <input type="checkbox" className="ckbox" checked={item.ckbox} onChange={this.ckboxchang.bind(this, index)} />
                                    <div className="goodsinfo">
                                        <img src={item.goods_image} alt="" />
                                        <div className="info">
                                            <p onClick={this.ttest} className="title">{item.goods_name}</p>

                                            <div className="num">
                                                <p>数量</p>
                                                <InputNumber size="small" style={{ width: 60, marginLeft: 8 }} min={1} max={10} value={item.goods_qty} onChange={changeQty.bind(this, item.goods_id)} />
                                                <DeleteOutlined type="button" onClick={removeItem.bind(this, item.goods_id)} className="del" />
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
                        <p className="gohome" onClick={this.gohome}>去逛逛</p>
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
                        合计<em>￥{totalPrice}</em>
                    </span>
                    <button className="footright">去结算</button>
                </div>
            </div>
        )
    }
}

// Cart = withLogin(Cart)
export default Cart;