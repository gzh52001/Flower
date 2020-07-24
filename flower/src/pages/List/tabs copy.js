import React, { Component } from 'react'
import { Tabs, Select, Space } from 'antd'
import http from '../../utils/http'

const { TabPane } = Tabs
const { Option } = Select

class Demo extends Component {
  async componentDidMount() {
    const datas = await http.get('/classify', {})
    let data = datas.result[0]
    this.setState({
      data: data,
    })
  }
  state = {
    data: [],
    tabPosition: 'left',
  }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition })
  }

  render() {
    const { data,data2 } = this.state
    console.log(data)
    console.log(data2)
   
    return (
      <Tabs tabPosition={this.state.tabPosition}>

        <TabPane tab="热门推荐" key="1">
          <div id="hot" name="hot" className="catebox-details-mode active">
            <header className="catebox-details-banner">
              <a
                className="navigation"
                href=""
              >
                <img
                  src="https://img02.hua.com/m/category/Classification/hot.png"
                  alt=""
                />
              </a>
            </header>

            <div className="catebox-details-body">
              <nav className="catebox-details-list ">
                <div className="catebox-details-item">
                  <a href="/aiqingxianhua/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Lover.png"
                      alt="送恋人鲜花"
                    />
                    <p className="catebox-details-item-desc">送恋人鲜花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/songzhangbeixianhua/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Elder.png"
                      alt="送长辈鲜花"
                    />
                    <p className="catebox-details-item-desc">送长辈鲜花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/shengrixianhua/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Birthday.png"
                      alt="生日鲜花"
                    />
                    <p className="catebox-details-item-desc">生日鲜花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/hezhuanghua/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Boxedflowers.png"
                      alt="礼盒鲜花"
                    />
                    <p className="catebox-details-item-desc">礼盒鲜花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/yongshenghua/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_PPF.png"
                      alt="永生花"
                    />
                    <p className="catebox-details-item-desc">永生花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/cake/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake.png"
                      alt="蛋糕"
                    />
                    <p className="catebox-details-item-desc">蛋糕</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/gansodangao/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Cake_ganso.png"
                      alt="元祖蛋糕"
                    />
                    <p className="catebox-details-item-desc">元祖蛋糕</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/gifts/goldenflower/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Goldfoilflower.png"
                      alt="金箔花"
                    />
                    <p className="catebox-details-item-desc">金箔花</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/gifts/shoushi/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Jewelry.png"
                      alt="首饰"
                    />
                    <p className="catebox-details-item-desc">首饰</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/qiaokeli/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Chocolate_qiaoluo.png"
                      alt="巧罗巧克力"
                    />
                    <p className="catebox-details-item-desc">巧罗巧克力</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/gifts/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_CreativeGifts.png"
                      alt="创意礼品"
                    />
                    <p className="catebox-details-item-desc">创意礼品</p>
                  </a>
                </div>
                <div className="catebox-details-item">
                  <a href="/qiyetuangou/" className="navigation">
                    <img
                      className="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_hot_Groupbuy.png"
                      alt="企业团购"
                    />
                    <p className="catebox-details-item-desc">企业团购</p>
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </TabPane>



        <TabPane tab="鲜花" key="2">
          <article
            id="flower"
            name="flower"
            class="catebox-details-mode active"
          >
            <header class="catebox-details-banner">
              <a class="navigation" href="/flower/">
                <img
                  src="https://img02.hua.com/m/category/Classification/flower.png?v"
                  alt=""
                />
              </a>
            </header>

            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">对象</h4>
                <div class="catebox-details-title-right">
                  <a href="/ranking/" class="navigation">
                    <i class="iconfont iconfont-trophy"></i>鲜花排行榜
                  </a>
                </div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/flower/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                      alt="全部"
                    />
                    <p class="catebox-details-item-desc">全部</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/songnvyouxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_1-2Girlfriend.png"
                      alt="送女友鲜花"
                    />
                    <p class="catebox-details-item-desc">送女友鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/songnanyouxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Boyfriend.png"
                      alt="送男性鲜花"
                    />
                    <p class="catebox-details-item-desc">送男性鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/songzhangbeixianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Elder.png"
                      alt="送长辈鲜花"
                    />
                    <p class="catebox-details-item-desc">送长辈鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/youqingxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_Friend.png"
                      alt="送朋友鲜花"
                    />
                    <p class="catebox-details-item-desc">送朋友鲜花</p>
                  </a>
                </div>
              </nav>
            </div>

            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">场合</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/aiqingxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Love.png"
                      alt="爱情鲜花"
                    />
                    <p class="catebox-details-item-desc">爱情鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/shengrixianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Birthday.png"
                      alt="生日鲜花"
                    />
                    <p class="catebox-details-item-desc">生日鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/tanbingweiwenxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Visit.png"
                      alt="探望慰问"
                    />
                    <p class="catebox-details-item-desc">探望慰问</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/businessFlower/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Business.png"
                      alt="商务鲜花"
                    />
                    <p class="catebox-details-item-desc">商务鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/zhufuqinghexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Congratulate.png"
                      alt="祝福庆贺"
                    />
                    <p class="catebox-details-item-desc">祝福庆贺</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/hunqingxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Wedding.png"
                      alt="婚庆鲜花"
                    />
                    <p class="catebox-details-item-desc">婚庆鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/daoqianxianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Apologize.png"
                      alt="道歉鲜花"
                    />
                    <p class="catebox-details-item-desc">道歉鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/aisixianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_Grief.png"
                      alt="哀思鲜花"
                    />
                    <p class="catebox-details-item-desc">哀思鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/worldflora/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_occ_gat.png"
                      alt="港澳台鲜花"
                    />
                    <p class="catebox-details-item-desc">港澳台鲜花</p>
                  </a>
                </div>
              </nav>
            </div>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">花材</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/meigui/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Rose.png"
                      alt="玫瑰"
                    />
                    <p class="catebox-details-item-desc">玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/kangnaixin/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Carnation.png"
                      alt="康乃馨"
                    />
                    <p class="catebox-details-item-desc">康乃馨</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xiangrikui/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Sunflower.png"
                      alt="向日葵"
                    />
                    <p class="catebox-details-item-desc">向日葵</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/baihe/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Lily.png"
                      alt="百合"
                    />
                    <p class="catebox-details-item-desc">百合</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xiuqiu/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Hydrangea.png"
                      alt="绣球"
                    />
                    <p class="catebox-details-item-desc">绣球</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/yujinxiang/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Tulips.png"
                      alt="郁金香"
                    />
                    <p class="catebox-details-item-desc">郁金香</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/fulang/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Gerbera.png"
                      alt="扶郎/太阳花"
                    />
                    <p class="catebox-details-item-desc">扶郎/太阳花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/matilian/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_mat_Calla.png"
                      alt="马蹄莲"
                    />
                    <p class="catebox-details-item-desc">马蹄莲</p>
                  </a>
                </div>
              </nav>
            </div>

            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">玫瑰颜色</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/hongsexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Red.png?v"
                      alt="红玫瑰"
                    />
                    <p class="catebox-details-item-desc">红玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/fensexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Pink.png?v"
                      alt="粉玫瑰"
                    />
                    <p class="catebox-details-item-desc">粉玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/baisexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_White.png?v"
                      alt="白玫瑰"
                    />
                    <p class="catebox-details-item-desc">白玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/zisexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Purple.png?v"
                      alt="紫玫瑰"
                    />
                    <p class="catebox-details-item-desc">紫玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/huangsexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Yellow.png?v"
                      alt="黄玫瑰"
                    />
                    <p class="catebox-details-item-desc">黄玫瑰</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xiangbinsexianhua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_colour_Champagne.png?v"
                      alt="香槟色"
                    />
                    <p class="catebox-details-item-desc">香槟色</p>
                  </a>
                </div>
              </nav>
            </div>

            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">类别</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/huashu/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bouquet.png"
                      alt="花束"
                    />
                    <p class="catebox-details-item-desc">花束</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/hezhuanghua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Flowerbox.png"
                      alt="花盒"
                    />
                    <p class="catebox-details-item-desc">花盒</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/hualan/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_flowerbasket.png"
                      alt="桌面花篮"
                    />
                    <p class="catebox-details-item-desc">桌面花篮</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/pingchahua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_bottle.png"
                      alt="瓶插花"
                    />
                    <p class="catebox-details-item-desc">瓶插花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/giftsBasket/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_Fruitbasket.png"
                      alt="果篮"
                    />
                    <p class="catebox-details-item-desc">果篮</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/businessFlower/kaiyehualan/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_kind_business.png"
                      alt="开业花篮"
                    />
                    <p class="catebox-details-item-desc">开业花篮</p>
                  </a>
                </div>
              </nav>
            </div>
            {/*  */}
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">价格</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list catebox-details-list-text">
                <div class="catebox-details-item">
                  <a href="/tejiaxianhua/" class="navigation">
                    <p class="catebox-details-item-desc">特价鲜花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/0-150/" class="navigation">
                    <p class="catebox-details-item-desc">150元以下</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/150-250/" class="navigation">
                    <p class="catebox-details-item-desc">150-200元</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/250-350/" class="navigation">
                    <p class="catebox-details-item-desc">250-350元</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/350-550/" class="navigation">
                    <p class="catebox-details-item-desc">350-550元</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/550-800/" class="navigation">
                    <p class="catebox-details-item-desc">550-800元</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/xianhuajiage/800-99999/" class="navigation">
                    <p class="catebox-details-item-desc">800元以上</p>
                  </a>
                </div>
              </nav>
            </div>
            {/*  */}
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">枝数</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list catebox-details-list-text">
                <div class="catebox-details-item">
                  <a href="/jiuduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">9枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/shiyiduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">11枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/shijiuduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">19枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/ershierduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">22枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/ershijiuduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">29枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/sanshisanduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">33枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/wushiduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">50枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/liushiliuduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">66枝</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/jiushijiuduomeigui/" class="navigation">
                    <p class="catebox-details-item-desc">99枝以上</p>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
        <TabPane tab="永生花" key="3">
          <article id="ppf" name="ppf" class="catebox-details-mode active">
            <header class="catebox-details-banner">
              <a class="navigation" href="/yongshenghua/">
                <img
                  src="https://img02.hua.com/m/category/Classification/ppf.png?v"
                  alt=""
                />
              </a>
            </header>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">对象</h4>
                <div class="catebox-details-title-right">
                  <a href="/ranking/?type=ppf" class="navigation">
                    <i class="iconfont iconfont-trophy"></i>永生花排行榜
                  </a>
                </div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/yongshenghua/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                      alt="全部"
                    />
                    <p class="catebox-details-item-desc">全部</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/yongshenghua/songlianren/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Girlfriend.png"
                      alt="送女友"
                    />
                    <p class="catebox-details-item-desc">送女友</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/yongshenghua/songnanxing/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Boyfriend.png"
                      alt="送男性"
                    />
                    <p class="catebox-details-item-desc">送男性</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/yongshenghua/songfumu/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Elder.png"
                      alt="送长辈"
                    />
                    <p class="catebox-details-item-desc">送长辈</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/yongshenghua/songpengyou/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_use_Friend.png"
                      alt="送朋友"
                    />
                    <p class="catebox-details-item-desc">送朋友</p>
                  </a>
                </div>
              </nav>
            </div>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">分类</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/livingflower/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Vase.png"
                      alt="永生瓶花"
                    />
                    <p class="catebox-details-item-desc">永生瓶花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a
                    href="/yongshenghua/yongshenghua_box.html"
                    class="navigation"
                  >
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Box.png"
                      alt="经典花盒"
                    />
                    <p class="catebox-details-item-desc">经典花盒</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a
                    href="/yongshenghua/yongshenghua_characteristic.html"
                    class="navigation"
                  >
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_Special.png"
                      alt="特色永生花"
                    />
                    <p class="catebox-details-item-desc">特色永生花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a
                    href="/yongshenghua/yongshenghua_large.html"
                    class="navigation"
                  >
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_ppf_sort_GiantRose.png"
                      alt="巨型玫瑰"
                    />
                    <p class="catebox-details-item-desc">巨型玫瑰</p>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
        <TabPane tab="蛋糕" key="4">
          <article id="cake" name="cake" class="catebox-details-mode active">
            <header class="catebox-details-banner">
              <a class="navigation" href="/cake/">
                <img
                  src="https://img02.hua.com/m/category/Classification/cake.png"
                  alt=""
                />
              </a>
            </header>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">品牌</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list catebox-details-list-square">
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/xfxbdangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_xfxb.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/gansodangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_ganso.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/mcakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_mcake.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/lecakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_lecake.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/vcakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_vcaketop.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/boncakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_boncake.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/waffleboydangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_waffleboy.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/micamikadangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_micamika.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/21cakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_21cake.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/beisikedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/bestcake.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/heartcheesedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_cheesecake.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/cakebossdangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_cakeboss.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/pantrysbestdangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_pantry.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/allcitycakedangao/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_cake_all.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item catebox-details-list-square"></div>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
        <TabPane tab="特色礼品" key="5">
          <article id="gift" name="gift" class="catebox-details-mode active">
            <header class="catebox-details-banner">
              <a class="navigation" href="/gifts/shoushi/">
                <img
                  src="https://img02.hua.com/m/category/Classification/gift.png?v"
                  alt=""
                />
              </a>
            </header>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">品牌</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list catebox-details-list-square">
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/gifts/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_All.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/gifts/swarovski/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_SWAROVSKI.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/gifts/glamever/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_GlamEver.png"
                      />
                    </a>
                  </div>
                </div>
                <div class="catebox-details-row">
                  <div class="catebox-details-item">
                    <a href="/gifts/dior/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_Dior.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/gifts/maowang/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_MW.png"
                      />
                    </a>
                  </div>
                  <div class="catebox-details-item">
                    <a href="/gifts/hellokitty/" class="navigation">
                      <img
                        class="catebox-details-item-pic"
                        src="https://img02.hua.com/m/category/Classification/m_category_gift_brand_HelloKitty.png"
                      />
                    </a>
                  </div>
                </div>
              </nav>
            </div>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">对象</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/gifts/to_lover/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Girlfriend.png"
                      alt="送女友"
                    />
                    <p class="catebox-details-item-desc">送女友</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_man/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Boyfriend.png"
                      alt="送男性"
                    />
                    <p class="catebox-details-item-desc">送男性</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_parents/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Elder.png"
                      alt="送长辈"
                    />
                    <p class="catebox-details-item-desc">送长辈</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_friend/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Friend.png"
                      alt="送朋友"
                    />
                    <p class="catebox-details-item-desc">送朋友</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_client/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Customer.png"
                      alt="送客户"
                    />
                    <p class="catebox-details-item-desc">送客户</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_teacher/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Teacher.png"
                      alt="送老师"
                    />
                    <p class="catebox-details-item-desc">送老师</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_kids/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Child.png"
                      alt="送小孩"
                    />
                    <p class="catebox-details-item-desc">送小孩</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/to_leader/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_use_Leader.png"
                      alt="送领导"
                    />
                    <p class="catebox-details-item-desc">送领导</p>
                  </a>
                </div>
              </nav>
            </div>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">分类</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/gifts/musicbox/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Musicbox.png"
                      alt="音乐盒"
                    />
                    <p class="catebox-details-item-desc">音乐盒</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/goldenflower/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Goldfoilflower.png"
                      alt="金箔花"
                    />
                    <p class="catebox-details-item-desc">金箔花</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/crystallaser/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_3DCrystal.png"
                      alt="3D水晶内雕"
                    />
                    <p class="catebox-details-item-desc">3D水晶内雕</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/shoushi/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_JewelryBeauty.png"
                      alt="首饰/美妆"
                    />
                    <p class="catebox-details-item-desc">首饰/美妆</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/chocolates/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_Chocolates.png"
                      alt="巧克力"
                    />
                    <p class="catebox-details-item-desc">巧克力</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/toys/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_dolls.png"
                      alt="公仔/睡枕"
                    />
                    <p class="catebox-details-item-desc">公仔/睡枕</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/jiajushenghuo/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_HomeLife.png"
                      alt="家居生活"
                    />
                    <p class="catebox-details-item-desc">家居生活</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/gifts/dengshi/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_gift_sort_OrnamentsOthers.png"
                      alt="摆件/其他"
                    />
                    <p class="catebox-details-item-desc">摆件/其他</p>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
        <TabPane tab="礼篮" key="6">
          <article
            id="flowerbasket"
            name="flowerbasket"
            class="catebox-details-mode active"
          >
            <header class="catebox-details-banner">
              <a class="navigation" href="/giftsBasket/">
                <img
                  src="https://img02.hua.com/m/category/Classification/hamper.png"
                  alt=""
                />
              </a>
            </header>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">礼篮</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/giftsBasket/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_Hamper.png"
                      alt="礼篮"
                    />
                    <p class="catebox-details-item-desc">礼篮</p>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
        <TabPane tab="植物花卉" key="7">
          <article id="plant" name="plant" class="catebox-details-mode active">
            <header class="catebox-details-banner">
              <a class="navigation" href="/duorouzhiwupenzai/">
                <img
                  src="https://img02.hua.com/m/category/Classification/plants.png?v"
                  alt=""
                />
              </a>
            </header>
            <div class="catebox-details-body">
              <div class="catebox-details-title">
                <h4 class="catebox-details-title-left">绿植花卉</h4>
                <div class="catebox-details-title-right"></div>
              </div>

              <nav class="catebox-details-list ">
                <div class="catebox-details-item">
                  <a href="/plant/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_flowers_use_All.png"
                      alt="全部"
                    />
                    <p class="catebox-details-item-desc">全部</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/plant/greenplant/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_Plants_Green.png"
                      alt="绿色植物"
                    />
                    <p class="catebox-details-item-desc">绿色植物</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/plant/potflower/" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_Plants_Potted.png"
                      alt="盆栽花卉"
                    />
                    <p class="catebox-details-item-desc">盆栽花卉</p>
                  </a>
                </div>
                <div class="catebox-details-item">
                  <a href="/duorouzhiwupenzai" class="navigation">
                    <img
                      class="catebox-details-item-pic"
                      src="https://img02.hua.com/m/category/Classification/m_category_Plants_Succulent.png"
                      alt="多肉盆栽"
                    />
                    <p class="catebox-details-item-desc">多肉盆栽</p>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </TabPane>
      </Tabs>
    )
  }
}

export default Demo
