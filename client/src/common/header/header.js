import React, { Component } from 'react';
import { HeaderWrapper, HeadContainer, RightCube} from './style';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //网页可见区宽度小于960px时变为true
      smallWidth: false
    }
    this.changeStyle = this.changeStyle.bind(this);
  }

  componentDidMount() {
    //加载的时候执行一次
    this.changeStyle();
    //后续监听
    window.addEventListener("resize", this.changeStyle)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.changeStyle)
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <HeaderWrapper>
        <HeadContainer style = {this.state.smallWidth ? {width: "100%"} : {width: "960px"}} >
          <Link to = '/'>
            <img src = '/imgs/frenchbull.jpg' alt='' ></img>
          </Link>
          <Link to = '/aboutMe'>
            <RightCube className = {pathname.indexOf('/aboutMe') === 0 ? 'active':''} >关于我</RightCube>
          </Link>
          <Link to = '/life/music'>
            <RightCube className = {pathname.indexOf('/life') === 0 ? 'active':''} >生活记录</RightCube>
          </Link>
          <Link to = '/work'>
            <RightCube className = {pathname.indexOf('/work') === 0 ? 'active':''}>技术博客</RightCube>
          </Link>
        </HeadContainer>
      </HeaderWrapper>
    )
  }

  changeStyle() {
    if (document.body.clientWidth < 960) {
      this.setState ({
        smallWidth: true
      })
    }else {
      this.setState ({
        smallWidth: false
      })
    }
  }
}

export default withRouter(Header);