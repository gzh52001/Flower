import React, { Component } from "react"
import { Carousel } from 'antd';
class Home extends Component {
    constructor() {
        super()
        this.state = {
            banner: [
                "http://img02.hua.com/slider/20_youflower_pc.jpg",
                "http://img02.hua.com/slider/20_birthday_pc.jpg",
                "http://img02.hua.com/slider/17_xingzuo_shizi_pc.jpg",
                "http://img02.hua.com/slider/20_longtou.jpg"
            ]
        }
    }
    render() {
        let { banner } = this.state
        return (
            <div>
                <header>
                    <Carousel effect="fade"
                        autoplay="true"
                        autoplaySpeed="20"
                    >
                        {
                            banner.map((item,index) => {
                                return (
                                    <div>
                                        <img style={{ width: '100%' }} src={item}  />
                                    </div>
                                )
                            })
                        }
                    </Carousel>,
                    <h2>花礼网介绍</h2>
                    <p style={{ textIndent: "2em" }}>花礼网始于2005年，以鲜花、永生花、蛋糕、巧克力、创意和实用礼品为
                    鲜花展示
                    主营商品，花心思设计原创鲜花和永生花，精选优质品牌服务商，以严谨的态度为消费者提供好品质、好价格、好服务的贴心体验 [2]  。
                    行业内率先研发并实施12道严苛品控标准：从花材采购、制作、成品、配送，到售后全程严格进行品控管理，将产品及服务标准化 [2]  。
                    门店覆盖全国城市，由当地门店新鲜制作，专人专车送货上门，1-3小时送达，可选择指定日期和时段，让心意准时到达 [2]  。
                    花礼网推出“勇敢爱”系列微电影 [3]  ，赞助《不要音乐》大型音乐旅行节目，全网播放超过5000万次 [4]  。以“勇敢爱，趁现在”为主题鼓励年轻人勇敢表达内心的情感 [2-4]  。
                    花礼网荣获行业殊荣：2015年09月08日被中国电子商务协会授予“2015年鲜花礼品行业龙头奖” [5]  ；2017年11月02日荣获2017世界电子商务大会最具影响力奖 [6]  ；2018年12月20日被授予世界电子商务大会“电子商务最具品牌价值奖” [7]  。
                    </p>
                    <h2>网站文化</h2>
                    <p style={{ textIndent: "2em" }}>
                        愿景
                        成为最受尊敬的鲜花礼品互联网平台 [8]
                        文化氛围
                        文化氛围(13张)
                        使命
                        提升国人幸福感 [8]
                        价值观
                        务实、进取、创新 [8]
                    </p>
                </header>
            </div>
        )
    }
}
export default Home