import React, { Component, Fragment } from 'react';
import Header from '../common/header/header';
import ScrollToTop from '../common/scrollTop/ScrollTop';
import { WorkWrapper, ArticleWrapper, Banner, Article, Filter} from './style';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import nprogress from 'nprogress'




class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //articleList用于存放所有文章
      //visibleArticleList用于存放可见文章，根据tag从articleList里筛选而来
      //articleList作为存放所有文章的库，所有筛选操作都只能所用于visibleArticleList
      articleList: [],
      tagList: [],
      visibleArticleList: [],
      banner: "全部文章"
    }
    this.filterArticleList = this.filterArticleList.bind(this);
    this.showAllArticleList = this.showAllArticleList.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
  }

  componentWillMount() {

    document.title = "技术博客 | 陈鑫的个人网站"

  }
  componentDidMount() {
    this.getArticleList();

  }
  render () {
    const { banner} = this.state;
    return (
      <Fragment>
        <Header></Header>
        <WorkWrapper>
          <ArticleWrapper>
            <Banner>{banner}</Banner>
            {
              this.renderArticleList()
            }
          </ArticleWrapper>
            <Filter>
            <span 
            onClick = {this.showAllArticleList}
            //tag根据banner的内容确定自己有没有被选中
            className ={banner === "全部文章" ? "iconfont icon-biaoqian_o active" : "iconfont icon-biaoqian_o"}>全部文章</span>
              {
                this.renderTagList()
              }
            </Filter>
        </WorkWrapper>
        <ScrollToTop></ScrollToTop>
      </Fragment>
    )
  }
  getArticleList() {
    nprogress.start()
    Axios.get('/api/articleList').then((res) => {
      //反转排序，会直接改变原数组
      nprogress.done()
      res.data.articleList.reverse();
      this.setState({
        articleList: res.data.articleList,
        visibleArticleList: res.data.articleList
      })
      this.getTagList()
    }).catch(() => {
      console.log('articleList:　Ajax请求失败')
    })
  }
  renderArticleList() {
    const { visibleArticleList } = this.state;
    return (
      visibleArticleList.map((item) => {
        return (
          
          <Article key = {item._id} >
          <div className = "tag"><span className ="iconfont icon-biaoqian_o"></span>{item.tag}</div>
          <Link  to = {'/work/detail/' + item._id}><img src = {item.imgurl} alt = ''/></Link>
          <Link  to = {'/work/detail/' + item._id}><h3>{item.title}</h3></Link>
          <p>{item.desc}</p>
          <div className = "timer" >
            <span className ="iconfont icon-06"></span>
            {item.time}
            {
                this.props.login && <span id = {item._id} className = "delete"  onClick = {this.deleteArticle} >删除</span>
            }
          </div>
          </Article>
          
        )
      })
    )
  }
  getTagList() { 
    const { articleList } = this.state;
    var tagList = [];
    for (var i=0; i < articleList.length; i++) {
      for (var j=0; j<tagList.length; j++) {
        if (tagList[j] === articleList[i].tag) {
          break;
        }
      }
        if (j === tagList.length) {
          tagList[j] = articleList[i].tag;
        }
    }
    this.setState({
      tagList: tagList
    })
  }
  renderTagList() {
    const { tagList, banner } = this.state;
    return(
      tagList.map((item) => {
        return(
          <span 
          key = {item}
          onClick = {this.filterArticleList} 
          className = {banner === item ? "iconfont icon-biaoqian_o active" : "iconfont icon-biaoqian_o"}>{item}</span>
        )
      })
    ) 
  }
  //筛选文章，顺便改变banner的显示内容
  filterArticleList(e) {
    const { articleList } = this.state;
    var visibleArticleList = [];
    for (var i=0; i<articleList.length; i++) {
      if (articleList[i].tag === e.target.innerText) {
        visibleArticleList.push(articleList[i])
      }
    }
    this.setState({
      visibleArticleList: visibleArticleList,
      banner: e.target.innerText
    })
  }
  showAllArticleList(e) {
    var articleList = this.state.articleList;
    this.setState({
      visibleArticleList: articleList,
      banner: e.target.innerText
    })
  }
  deleteArticle(e) {
    Axios.get('/api/deleteArticle/' +　e.target.id).then(() => {
      this.getArticleList()
    }).catch(() => {
      console.log('deleteArticle:　Ajax请求失败')
    })
  }
}

export default Work;