import React, { Component } from 'react';
import { HeaderWrapper, HeadContainer, RightCube} from './style';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

  render() {
    const { pathname } = this.props.location;

    return (
      <HeaderWrapper>
        <HeadContainer>
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
}

export default withRouter(Header);