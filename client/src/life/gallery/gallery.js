import React, { Component, Fragment } from 'react';
import Header from '../../common/header/header';
import VerticalNavBar from '../../common/verticalNavBar/VerticalNavBar';
import { GalleryWrapper, DrawingWrapper} from './style';
import Axios from 'axios';
import nprogress from 'nprogress'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawingList: [{_id: "", clone: "", imgurl: "", title: "", desc: ""}],
      counter: 1
    }
    //创建 Refs
    this.boxDrawing = React.createRef();
    this.turnLeft = this.turnLeft.bind(this);
    this.turnRight = this.turnRight.bind(this);
    this.handleClone = this.handleClone.bind(this);
    this.handleCounterBarClick = this.handleCounterBarClick.bind(this);
    this.deleteDrawing = this.deleteDrawing.bind(this);
  }
  componentWillMount() {
    document.title = "生活记录 | 陈鑫的个人博客"
  }
  componentDidMount() {
    this.getDrawingList()
    //使用 ref 中的 current 属性对节点的引用进行访问
    this.boxDrawing.current.addEventListener('transitionend', this.handleClone)
  }
  componentWillUnmount() {
    this.boxDrawing.current.removeEventListener('transitionend', this.handleClone)
  }
  render () {
    var { counter, drawingList } = this.state;
    var style = {
      left: counter * -100 + '%',
      width: drawingList.length * 100 +'%'
    }
    return (
      <Fragment>
      <Header></Header>
      <GalleryWrapper>
        <VerticalNavBar></VerticalNavBar>

        <DrawingWrapper>
          <div className = "box_drawing">
            {/* 将 refs 与 ul 绑定*/}
            <ul style = {style} ref = {this.boxDrawing} >
            {
              this.renderDrawing()
            }
            </ul>
            <div className = "counterBar" >
            {
              this.renderCounterBar()
            }
            </div>
          </div>
          <div 
            className = "arrow leftArrow" 
            onClick = {this.turnLeft}
          >&lt;</div>
          <div 
            className = "arrow rightArrow"
            onClick = {this.turnRight}
          >&gt;</div>
        </DrawingWrapper>
      </GalleryWrapper>
      </Fragment>
    )
  }
  getDrawingList() {
    nprogress.start();
    Axios.get('/api/drawingList').then((res) => {
      var drawingList = res.data.drawingList.reverse();
      //深拷贝一份第一项，修改_id，添加clone属性
      var firstItem = JSON.parse(JSON.stringify(drawingList[0]));
      firstItem._id = 0;
      firstItem.clone = "firstClone"
      //深拷贝一份最后一项，修改_id，添加clone属性
      var lastItem = JSON.parse(JSON.stringify(drawingList[drawingList.length-1]));
      lastItem._id = 1;
      lastItem.clone = "lastClone"
      var newDrawingList = [];
      newDrawingList.push(lastItem, ...drawingList, firstItem)
      this.setState({
        drawingList: newDrawingList
      })
      nprogress.done()
    }).catch(() => {
      console.log("drawingList: Ajax请求失败")
    })
  }
  renderDrawing() {
    var { drawingList } = this.state;
    var style = {
      width: 100/drawingList.length + '%'
    }
    return(
      drawingList.map((item) => {
        return(
          <li key = {item._id} style = {style}>
            <img src = {item.imgurl} alt = ''></img>
            <h3>《{item.title}》</h3>
            {
              this.props.login && <button id = {item._id} onClick = {this.deleteDrawing} >删除</button>
            }
            <span> {item.desc} </span>
          </li>
        )
      })
    )
  }
  renderCounterBar() {
    var { drawingList, counter } = this.state;
    var tmpList = [];
    //除去firstClone 和 lastClone 这两项
    for (let i=1; i<=drawingList.length-2; i++) {
      tmpList.push(
      <span
        key = {i}
        onClick = {() => this.handleCounterBarClick(i)}
        className = {counter === i ? "active iconfont icon-yuandianzhong" : "iconfont icon-yuandianzhong"} 
      ></span>
      )
    }
    return(tmpList)
  }
  handleCounterBarClick(i) {
    this.boxDrawing.current.style.transition = "left .4s ease-in-out"
    this.setState({
      counter: i
    })
  }
  
  turnRight() {
    var { counter, drawingList } = this.state;
    //在到达 firstClone 和 lastClone 时，如果点击切换按钮太快的话，transitionend里面的函数还来不及执行counter就改变了
    //后果就是counter逃逸出了我们设置在firstClone 和 lastClone 之间的区间
    //所以当counter在两端时，不让turnLeft() turnRight()发生作用
    if( counter >= drawingList.length - 1) return;
    this.boxDrawing.current.style.transition = "left .4s ease-in-out"
    this.setState({
      counter: counter + 1
    })
  }
  turnLeft() { 
    var { counter } = this.state;
    if( counter <= 0) return;
    this.boxDrawing.current.style.transition = "left .4s ease-in-out"
    this.setState({
      counter: this.state.counter - 1
    })
  }
  handleClone() {
    var { drawingList, counter } = this.state;
    if (drawingList[counter].clone === "firstClone") {
      this.boxDrawing.current.style.transition = "none";
      this.setState({
        counter: 1
      })
    }
    if (drawingList[counter].clone === "lastClone") {
      this.boxDrawing.current.style.transition = "none";
      this.setState({
        counter: drawingList.length - 2
      })
    }
  }
  deleteDrawing(e) {
    Axios.get('/api/deleteDrawing/' + e.target.id).then(() => {
      this.getDrawingList()
    }).catch(() => {
      console.log('deleteDrawing:　Ajax请求失败')
    })
  }
}

export default Gallery;