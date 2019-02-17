import React, { Component } from 'react';
import { Background, HomeWrapper} from './style';
import CanvasComponent from './CanvasComponent';

class Home extends Component {
  componentWillMount() {
    document.title = "主页 | 陈鑫的个人网站"
  }
  render () {
    return (
      <Background>
      <HomeWrapper>
          <CanvasComponent ></CanvasComponent>
          <img className='img_avatar' src = '/imgs/frenchbull.jpg' alt = ''/>
      </HomeWrapper>
      </Background>
    )
  }
}

export default Home;