import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NavWrapper } from './style';

class VerticalNavBar extends Component {
  render() {
    const {pathname} = this.props.location;
    return(
    <NavWrapper>
      <Link to = '/life/diary'>
        <div className = {pathname.indexOf('/life/diary') === 0 ? 'active':'inactive'} >流水帐</div>
      </Link>      
      <Link to = '/life/gallery'>
        <div className = {pathname.indexOf('/life/gallery') === 0 ? 'active':'inactive'} >画廊</div>
      </Link>
      <Link to = '/life/music'>
        <div className = {pathname.indexOf('/life/music') === 0 ? 'active':'inactive'} >音乐</div>
      </Link>
    </NavWrapper>
    )
  }
}
export default withRouter(VerticalNavBar);