import React, { Component, Fragment } from 'react';
import Header from '../common/header/header'
import ScrollToTop from '../common/scrollTop/ScrollTop'
import {AboutMeWrapper, AboutMeHTML} from './style';
import Axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
});

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutMeList: []
    }
    this.deleteAboutMe = this.deleteAboutMe.bind(this);
  }
  componentWillMount() {
    document.title = "关于我 | 陈鑫的个人博客"
  }
  componentDidMount() {
    this.getAboutMeList()
  }
  render () {

    return (
      <Fragment>
        <Header></Header>
        {
          this.renderAboutMeList()
        }
        <ScrollToTop/>
      </Fragment>
    )
  }
  getAboutMeList() {
    Axios.get('/api/aboutMeList').then((res) => {
      this.setState({
        aboutMeList: res.data.aboutMeList
      })
    })
  }
  renderAboutMeList() {
    return(
      this.state.aboutMeList.map((item) => {
        const markdown = marked(item.aboutMe);
        return(
          <AboutMeWrapper key = {item._id} >
          <AboutMeHTML
          dangerouslySetInnerHTML = {{__html: markdown}}
          >
          </AboutMeHTML>
          {
          this.props.login && <button id = {item._id} onClick = {this.deleteAboutMe} >删除</button>
          }
          </AboutMeWrapper>
        )
      })
    )
  }
  deleteAboutMe(e) {
    Axios.get('/api/deleteAboutMe/' + e.target.id).then(() =>{
      this.getAboutMeList()
    }).catch(() => {
      console.log("deleteAboutMe: Ajax请求失败")
    })
  }
}

export default AboutMe;