import React, { Component, Fragment } from 'react';
import Header from '../../common/header/header';
import ScrollToTop from '../../common/scrollTop/ScrollTop';
import { DetailWrapper } from './style';
import Axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
});


class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: ''
    }
  }
  componentWillMount() {
    document.title = "技术博客 | 陈鑫的个人博客"
  }
  componentDidMount() {
    this.getDetailList()
  }
  
  render () {
    const markdown = marked(this.state.detail);
    return (
      <Fragment>
        <Header></Header>
        <DetailWrapper 
        dangerouslySetInnerHTML = {{__html: markdown}} 
        />
        <ScrollToTop/>
      </Fragment>
    )
  }
  getDetailList() {
    Axios.get('/api' + this.props.location.pathname).then((res) => {
      this.setState({
        detail: res.data.articleList[0].detail
      })
    }).catch(() => {
      console.log("detailList: Ajax请求失败")
    })
  }
  renderDetailList() {

  }
}

export default Detail;