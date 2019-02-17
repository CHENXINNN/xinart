import React, { Component, Fragment } from 'react';
import Header from '../../common/header/header';
import VerticalNavBar from '../../common/verticalNavBar/VerticalNavBar';
import { DiaryWrapper, PostWrapper, Postbox, Post} from './style'
import Axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';

marked.setOptions({
  highlight: (code) => hljs.highlightAuto(code).value
});

class Diary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    }
    this.deletePost = this.deletePost.bind(this);
  }

  componentWillMount() {
    document.title = "生活记录 | 陈鑫的个人博客"
  }
  componentDidMount() {
    this.getPostList()
  }

  render () {
    return (
      <Fragment>
      <Header></Header>
      <DiaryWrapper>
        <VerticalNavBar></VerticalNavBar>
        <PostWrapper>
          {
            this.renderPostList()
          }
        </PostWrapper>
      </DiaryWrapper>
      </Fragment>
    )
  }
  getPostList() {
    Axios.get('/api/postList').then((res) => {
      res.data.postList.reverse();
      this.setState({
        postList: res.data.postList
      })
    }).catch(() => {
      console.log("postList: ajax请求失败")
    })
  }
  renderPostList() {
    const { postList } = this.state;
    return(
      postList.map((item) => {
        const markdown = marked(item.post);
        return(
          <Postbox key = {item._id}>
            <Post  dangerouslySetInnerHTML = {{__html: markdown}} ></Post>
            <span className ="iconfont icon-06"></span>
            <span className = "time" >{item.time}</span>
            {
              this.props.login && <button id = {item._id} onClick = {this.deletePost} >删除</button>
            }
          </Postbox>
        )
      })
    )
  }
  deletePost(e) {
    Axios.get('/api/deletePost/' + e.target.id).then(() => {
      this.getPostList()
    }).catch(() => {
      console.log('deleteAPost:　Ajax请求失败')
    })
  }
}

export default Diary;