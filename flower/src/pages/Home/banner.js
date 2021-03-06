import { Carousel, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
class Banner extends Component {
  
  state = {
    data: [],
    imgHeight: 176,
    slideIndex: 2,
  }
  
  componentDidMount() {
    
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['17_xingzuo_jxz_m', '20_graduation_m', '19_birthday_banner_m','18_youflower_m'],
      });
    }, 100);
  }
  componentDidUpdate() {
    if (this.state.slideIndex !== this.state.data.length - 1) {
      this.setState({ slideIndex: this.state.data.length - 1 });
    }
  }
  render() {
    return (
      <WingBlank>
        <Button
          onClick={() => {
            this.setState({
              data: this.state.data.concat('AiyWuByWklrrUDlFignR'),
            });
          }}
          ></Button>
        <WhiteSpace />
        <Carousel
          autoplay={true}
          infinite
          selectedIndex={this.state.slideIndex}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        
        >
          {this.state.data.map((val, index) => (
            <a
              key={val + index}
              href=""
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              {/* https://img02.hua.com/slider/20_graduation_m.jpg */}
              {/* https://img02.hua.com/slider/19_birthday_banner_m.jpg */}
              {/* https://img02.hua.com/slider/18_youflower_m.jpg */}
              <img
                src={`https://img02.hua.com/slider/${val}.jpg`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
    );
  }
}

export default Banner