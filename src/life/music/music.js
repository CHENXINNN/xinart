import React, { Component, Fragment } from 'react';
import Header from '../../common/header/header';
import VerticalNavBar from '../../common/verticalNavBar/VerticalNavBar';
import { MusicWrapper, AlbumWrapper } from './style';
import Axios from 'axios';

class Music extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumList: []
    }
    this.deleteAlbum = this.deleteAlbum.bind(this);
  }
  componentWillMount() {
    document.title = "生活记录 | 陈鑫的个人博客"
  }
  componentDidMount() {
    this.getAlbumList()
  }
  render () {
    return (
      <Fragment>
      <Header></Header>
      <MusicWrapper>
        <VerticalNavBar></VerticalNavBar>
        <AlbumWrapper>
          {
            this.renderAlbumList()
          }
        </AlbumWrapper>
      </MusicWrapper>
      </Fragment>
    )
  }
  getAlbumList() {
    Axios.get('/api/albumList').then((res) => {
      res.data.albumList.reverse();
      this.setState({
        albumList: res.data.albumList
      })
    }).catch(() => {
      console.log("albumList: ajax请求失败")
    })
  }
  renderAlbumList() {
    const { albumList } = this.state;
    return(
      albumList.map((item) => {
        return (
          <div key = {item._id} className = "album" ><img  src = {item.imgurl} alt = ''></img>
          <div className = "albumDetails">
            <div className = {item.album ? "withAlbum" : "withoutAlbum"}>
              <p>原唱：{item.singer}</p>
              <p>作词：{item.lyricist}</p>
              <p>作曲：{item.composer}</p>
              {
                item.album && <p>专辑：{item.album}</p>
              }
              <p>发行日期：{item.release}</p>
            </div>
          </div>
          <p>{item.song}</p>
          {
            this.props.login && <button id = {item._id} onClick = {this.deleteAlbum} >删除</button>
          }
        </div>
        )
      })
    )
  }
  deleteAlbum(e) {
    Axios.get('/api/deleteAlbum/' + e.target.id).then(() => {
      this.getAlbumList()
    }).catch(() => {
      console.log('deleteAlbum:　Ajax请求失败')
    })
  }
}

export default Music;