import React, { Component } from 'react'
// import { Carousel } from 'antd'
import Banner from './banner'
// import http, { request } from '../../../utils/http'
import { BarsOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import './home.scss'

class Home extends Component {
  //   async componentDidMount(){
  //     // 获取商品id
  //     const {match} = this.props;
  //     const {id} = match.params;

  //     // /mobile/index.php?act=goods&op=goods_detail&goods_id=227330&key=
  //     const {datas} = await http.get('/mobile/index.php',{
  //         act:'goods',
  //         op:'goods_detail',
  //         goods_id:id,
  //     });

  //     console.log('datas=',datas)

  //     this.setState({
  //         data:{
  //             ...datas.goods_info,
  //             goods_image:datas.goods_image,
  //         }
  //     })
  // }

  state = {
    nav_list: [
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_category_ppf.png',
        alt: '鲜花',
        name: '鲜花',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_category_ppf.png',
        alt: '永生花',
        name: '永生花',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_category_cake.png',
        alt: '蛋糕',
        name: '蛋糕',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_category_gift.png',
        alt: '礼品',
        name: '礼品',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_category_chocolate.png',
        alt: '巧克力',
        name: '巧克力',
      },
    ],
    scene_list: [
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_lover.png',
        alt: '送恋人',
        title: '送恋人',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_elder.png',
        alt: '送长辈',
        title: '送长辈',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_friends.png',
        alt: '送朋友',
        title: '送朋友',
      },
    ],
    scene_list2: [
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_birthday2.png',
        alt: '生日祝福',
        title: '生日祝福',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_profess2.png',
        alt: '表白求婚',
        title: '表白求婚',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_business2.png',
        alt: '开业商务',
        title: '开业商务',
      },
      {
        href: '',
        img: 'https://img02.hua.com/m/home/img/m_home_use_anniversary2.png',
        alt: '周年纪念',
        title: '周年纪念',
      },
    ],
    more_2: [
      {
        href: '',
        name: '热销榜',
        desc: '集万千宠爱',
        label: '大家都在买',
        text: '热销12.6万束',
      },
      {
        href: '',
        name: '特价专区',
        desc: '超值好货',
        label: '限时直降',
        text: '¥158',
        s: '¥186',
      },
    ],
  }
  render() {
    const { nav_list, scene_list, scene_list2, more_2 } = this.state
    return (
      <div>
        {/* {<!--HeaderBar-->} */}
        <div className="headerbar">
          <div className="headerbar-left">
            <a href="">
              <BarsOutlined className="iconfont iconfont-sevice" />
            </a>
          </div>
          <div className="headerbar-logo">
            <img
              src="https://m.hua.com/content/vue/login/static/img/m_hualogo.png"
              alt=""
            />
          </div>
          <div className="headerbar-right">
            <div className="headerbar-right-kf active">
              <CustomerServiceOutlined className="iconfont iconfont-sevice" />
            </div>
          </div>
        </div>
        {/* {Banner} */}
        <Banner />
        {/* ConpanyInfo */}
        <div className="conpany-info">
          <div className="conpany-info-item">认证龙头企业</div>
          <div className="conpany-info-item">15年品牌</div>
          <div className="conpany-info-item">3小时送花</div>
          <div className="conpany-info-item">
            最近
            <a href="">
              <u id="commentCount">375654</u>
            </a>
            条好评
          </div>

          {/* <!--ProductCategory--> */}
        </div>
        <nav className="procate">
          {nav_list.map((item) => {
            return (
              <div key={item.alt} className="procate-item">
                <a href={item.href} className="navigation">
                  <img src={item.img} alt={item.alt} />
                  <p>{item.name}</p>
                </a>
              </div>
            )
          })}
        </nav>
        {/* <!--Scene--> */}
        <section className="scene">
          <div className="modetitle">一秒选花</div>

          <div className="scene-list">
            {scene_list.map((item, index) => {
              return (
                <div key={index + 1} className="scene-item scene-item-radius">
                  <a href={item.href} className="navigation">
                    <img src={item.img} alt={item.alt} />
                    <span className="scene-item-use-title">{item.title}</span>
                  </a>
                </div>
              )
            })}
          </div>

          <div className="scene-list">
            {scene_list2.map((item, index) => {
              return (
                <div key={index + 1} className="scene-item scene-item-radius">
                  <a href={item.href} className="navigation">
                    <img src={item.img} alt={item.alt} />
                    <span className="scene-item-title">{item.title}</span>
                  </a>
                </div>
              )
            })}
          </div>
          {/* <!--mode-2--> */}
          <div className="scene-list">
            {more_2.map((item, index) => {
              return (
                <a
                  key={index + 1}
                  href={item.href}
                  className="scene-item scene-item-bg"
                >
                  <img src="../../img/m_home_ranklist2.png" alt="" />
                  <p className="scene-item-name">{item.name}</p>
                  <p className="scene-item-desc">{item.desc}</p>
                  <div className="scene-item-bottom">
                    <span className="scene-item-bottom-label">
                      {item.label}
                    </span>
                    <span className="scene-item-bottom-text" data-id="9012038">
                      {item.text}
                      <s>{item.s}</s>
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
          {/* <!--mode-3--> */}
          <div className="scene-list">
            <div className="scene-item">
              <a
                href="https://m.hua.com/theme/xinpinlaixi/"
                className="navigation"
              >
                <img
                  src="https://img02.hua.com/m/home/img/m_home_category_new3.jpg?1"
                  alt="新品来袭"
                />
                <span className="scene-item-pange">新品来袭</span>
              </a>
            </div>
            <div className="scene-item">
              <a
                href="https://m.hua.com/theme/pinweizhixuan/"
                className="navigation"
              >
                <img
                  src="https://img02.hua.com/m/home/img/m_home_category_quality3.jpg?1"
                  alt="品味之选"
                />
                <span className="scene-item-pange">品味之选</span>
              </a>
            </div>
            <div className="scene-item">
              <a href="https://m.hua.com/you/" className="navigation">
                <img
                  src="https://img02.hua.com/m/home/img/m_home_category_you3.jpg?1"
                  alt="设计师臻选"
                />
                <span className="scene-item-pange">设计师臻选</span>
              </a>
            </div>
          </div>
        </section>
        {/* <!--Product Flower--> */}
        <section class="product">
            <h3 class="product-title">送恋人/爱情鲜花</h3>
            <div class="product-list">
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9010966.html?huaPid=homepage-f101" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9010966.jpg_220x240.jpg" alt="一往情深"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">一往情深</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">精品玫瑰礼盒:19枝红玫瑰，勿忘我0.1扎</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">年销售冠军</span>
                                    </div>
                                <div class="product-item-info-promo">经典爆款，年销售冠军！</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9010966" ><strong>¥239</strong><s>¥315</s></p>
                                        <p class="product-item-info-sales">已销售12.4万件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9010966"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012471.html?huaPid=homepage-f102" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012471.jpg_220x240.jpg" alt="你是唯一"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">你是唯一</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">卡罗拉红玫瑰11枝</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">11枝新品</span>
                                    </div>
                                <div class="product-item-info-promo">11枝新品 一心一意的爱</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012471" ><strong>¥138</strong><s>¥189</s></p>
                                        <p class="product-item-info-sales">已销售879件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012471"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012440.html?huaPid=homepage-f103" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012440.jpg_220x240.jpg" alt="星河璀璨"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">星河璀璨</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">香槟玫瑰9枝、蓝绣球、向日葵、白色洋桔梗、大叶尤加利</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">毕业季9折特惠</span>
                                    </div>
                                <div class="product-item-info-promo">毕业季倾情设计，9折特惠</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012440" ><strong>¥262</strong><s>¥376</s></p>
                                        <p class="product-item-info-sales">已销售3020件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012440"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012177.html?huaPid=homepage-f104" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012177.jpg_220x240.jpg" alt="不变的承诺"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">不变的承诺</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">99枝红玫瑰</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">经典99枝</span>
                                    </div>
                                <div class="product-item-info-promo">经典99枝，鼎力推荐！</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012177" ><strong>¥539</strong><s>¥869</s></p>
                                        <p class="product-item-info-sales">已销售6.5万件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012177"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012243.html?huaPid=homepage-f105" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012243.jpg_220x240.jpg" alt="恋恋情深"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">恋恋情深</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow-line2 ">11枝香槟玫瑰，白色多头百合2枝</p>
                                <div class="product-item-info-promo">经典款式 简约设计</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012243" ><strong>¥198</strong><s>¥255</s></p>
                                        <p class="product-item-info-sales">已销售7.7万件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012243"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012154.html?huaPid=homepage-f106" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012154.jpg_220x240.jpg" alt="甜美公主"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">甜美公主</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow-line2 ">白玫瑰22枝，粉佳人粉玫瑰14枝，粉色桔梗5枝</p>
                                <div class="product-item-info-promo">甜美设计 清新典雅</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012154" ><strong>¥369</strong><s>¥485</s></p>
                                        <p class="product-item-info-sales">已销售2.4万件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012154"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012469.html?huaPid=homepage-f107" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012469.jpg_220x240.jpg" alt="韩式系列/亲密爱人"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">韩式系列/亲密爱人</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">卡罗拉玫瑰33枝，配桔梗、绣球</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">全新韩式系列</span>
                                    </div>
                                <div class="product-item-info-promo">全新韩式系列 新品</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012469" ><strong>¥439</strong><s>¥569</s></p>
                                        <p class="product-item-info-sales">已销售350件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012469"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="product-item product-item-horizontal">
                        <a href="/product/9012474.html?huaPid=homepage-f108" class="navigation">
                            <div class="product-item-pic"><img src="https://img01.hua.com/uploadpic/newpic/9012474.jpg_220x240.jpg" alt="韩式系列/慢慢喜欢你"/></div>
                            <div class="product-item-info">
                                <p class="product-item-info-name text-overflow">韩式系列/慢慢喜欢你</p>
                                {/* <!--Dev:: text-overflow Or text-overflow-line2--> */}
                                {/* <!-- 限时抢购标签 tag-promo，同商品列表页  --> */}
                                <p class="product-item-info-desc text-overflow ">艾莎玫瑰16枝</p>
                                    <div class="product-item-info-tags">
                                            <span class="tag-promo">全新爱莎玫瑰</span>
                                    </div>
                                <div class="product-item-info-promo">全新韩式系列 珍品玫瑰</div>
                                <div class="product-item-info-bottom">
                                    <div class="product-item-info-bottom-left">
                                        <p class="product-item-info-prices" data-id="9012474" ><strong>¥239</strong><s>¥329</s></p>
                                        <p class="product-item-info-sales">已销售322件</p>
                                    </div>
                                    <div class="product-item-info-bottom-right" data-id="9012474"><i class="iconfont iconfont-buy"></i></div>
                                </div>
                            </div>
                        </a>
                    </div>
            </div>
            <div class="product-more">
                <a href="/aiqingxianhua/" class="product-more-btn">查看更多</a>
            </div>
        </section>
      </div>
    )
  }
}
export default Home
