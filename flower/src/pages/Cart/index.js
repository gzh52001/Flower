import React, { Component } from 'react';
import Myhead from '../Mine/myhead';
// import { withLogin } from '../../utils/hoc'
import { DeleteOutlined } from '@ant-design/icons'
import './cart.scss'
import http from '../../utils/http.js'
import { InputNumber } from 'antd';
import { connect } from 'react-redux';
import { remove, get } from '../../store/actions/cart'
import store from '../../store'

const mapStateToProps = state => {
    return {
        cartlist: state.cart.cartlist,
        totalPrice: state.cart.cartlist.reduce((prev, item) => prev + item.price * item.number, 0)
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeQty(id, number) {
            dispatch({
                type: 'CHANGE_QTY',
                id,
                number
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
            cartlist: [],
            totalPrice: 0
        }

    }

    async componentDidMount() {
        const datas = await http.get('/cart/youlike');
        const data2 = await http.get('/cart/get');
        const data3 = data2.result
        const action = get(data3)
        store.dispatch(action)

        // console.log(this.state.cartlist.cartlist)
        // let arr = []
        // for (let i = 0; i < this.props.cartlist.length; i++) {
        //     // obj1 = Object.assign(this.props.cartlist[i], this.props.cartlist[i + 1])
        //     arr.push(Object.assign(this.props.cartlist[i], { ckbox: true }))
        // }

        // let jisuan = arr.filter(item => item.ckbox)      
        if (data3) {
            this.setState({
                youlike: datas.result[0].and,
                cartlist: data3
                // totalPrice: jisuan.reduce((prev, item) => prev + item.goods_price * item.goods_qty, 0)
            })
        } else {
            this.setState({
                youlike: datas.result[0].and,
                cartlist: []
                // totalPrice: jisuan.reduce((prev, item) => prev + item.goods_price * item.goods_qty, 0)
            })
        }

        // console.log('this.props=', this.props)
        // console.log('this.state=', this.state)
    }
    // componentDidUpdate(prev1, prev2) {
    //     // let jisuan = this.state.cartlist.filter(item => item.ckbox)
    //     if (prev2.cartlist != this.state.cartlist) {
    //         this.setState({
    //             // totalPrice: jisuan.reduce((prev, item) => prev + item.goods_price * item.goods_qty, 0)
    //             cartlist: this.props.cartlist
    //         })
    //     }
    //     // console.log('tis.props=', this.props)
    // }

    gohome = () => {
        this.props.history.push('/home')
    }

    ckboxchang = (idx) => {

        let jisuan = this.state.cartlist.filter(item => !item.status)
        this.setState({
            cartlist: this.state.cartlist.map((item, index) => index === idx ? { ...item, status: !this.state.cartlist[idx].status } : item),
            totalPrice: jisuan.reduce((prev, item) => prev + item.price * item.number, 0)
        })
        // console.log(jisuan)
    }

    removeItem = (id) => {
        console.log(123)
        store.dispatch(remove(id))
        this.setState({
            cartlist: this.state.cartlist.filter(item => item.id != id)
        })
        // location.reload([bForceGet])
    }
    godetail = (id) => {
        this.props.history.push('/detail?' + id)
    }

    changeNum = (num, idx) => {
        let jisuan = this.state.cartlist.filter(item => item.status)
        this.setState({
            cartlist: this.state.cartlist.map((item, index) => {
                return idx === index ? { ...item, number: num } : item
            }),
            totalPrice: jisuan.reduce((prev, item) => prev + item.price * item.number, 0)
        })
        // console.log(event, num)
    }

    render() {
        const { youlike, cartlist, totalPrice } = this.state
        const { changeQty } = this.props;
        return (
            <div>
                <Myhead />
                {/* {console.log('carlist=', cartlist)} */}
                {cartlist.length ?
                    <ul className="cartlist">{
                        cartlist.map((item, index) => {
                            let num = Number(item.number)
                            let price = Number(item.price)
                            return (
                                <li key={item.id} className="cartitem">
                                    <input type="checkbox" className="ckbox" checked={item.status} onChange={this.ckboxchang.bind(this, index)} />
                                    <div className="goodsinfo">
                                        <img src={item.img} alt="" />
                                        <div className="info">
                                            <p onClick={this.ttest} className="title">{item.title}</p>

                                            <div className="num">
                                                <p>数量</p>
                                                <InputNumber size="small" style={{ width: 60, marginLeft: 8 }} min={1} max={10} defaultValue={1} num={item.number} onChange={event => { this.changeNum(event, index) }} />
                                                <DeleteOutlined type="button" onClick={this.removeItem.bind(this, item.id)} className="del" />
                                                {/* {console.log('itemid=', item.price)} */}
                                            </div>
                                            <p className="price">￥{price * num}</p>
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
                                        <a onClick={this.godetail.bind(this, item.id)}>
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
