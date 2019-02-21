import React, { Component } from 'react';
import {ScrollToTopWrapper} from './style';

class ScrollToTop extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      show: false
    })
    this.changeScrollTopShow = this.changeScrollTopShow.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.changeScrollTopShow)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.changeScrollTopShow)
  }
  render() {
    const { show } = this.state;
    return(
      <ScrollToTopWrapper>
        {
          show && <div className = "scrollTop" onClick = {this.scrollToTop}><span className ="iconfont icon-dingbu"></span></div>
        }
      </ScrollToTopWrapper>

    )
  }

  changeScrollTopShow() {
    if (window.pageYOffset < 200) {
      this.setState({
        show: false
      })
    }else {
      this.setState({
        show: true
      })
    }
  }
  scrollToTop() {
    const scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if ( pos > 0 ) {
        window.scrollTo( 0, pos - 20 );
      } else {
        window.clearInterval( scrollToTop );
      }
    }, 1);
  }
}
export default ScrollToTop;