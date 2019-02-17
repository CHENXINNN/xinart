import React, { Component, Fragment } from 'react';
import {AddItemsWrapper} from './style';


class AddItem extends Component {

  componentWillMount() {
    document.title = "添加文章列表 | 陈鑫的个人博客"
  }
  render () {
    return (
      <Fragment>
        <AddItemsWrapper>
        <p>*******************************addPost*******************************</p>
          <form action = '/api/addPost' method = 'post' >
            <p>post:<textarea name = "post" cols = "100" rows = "10"></textarea> </p>
            <p>time:<input type = "text" name = "time" size = "100"></input></p>
            <p><input type = 'submit' value = '提交'></input></p>
          </form>
        <p>*******************************addAlbum*******************************</p>
          <form action = '/api/addAlbum' method = 'post' >
            <p>imgurl:<input type = "text" name = "imgurl" size = "100"></input></p>
            <p>song:<input type = "text" name = "song" size = "100"></input></p>
            <p>album(optional):<input type = "text" name = "album" size = "100"></input></p>
            <p>singer:<input type = "text" name = "singer" size = "100"></input></p>
            <p>lyricist:<input type = "text" name = "lyricist" size = "100"></input></p>
            <p>composer:<input type = "text" name = "composer" size = "100"></input></p>
            <p>release:<input type = "text" name = "release" size = "100"></input></p>
            <p><input type = 'submit' value = '提交'></input></p>
          </form>

          <p>*******************************AddArticle*******************************</p>
          <form action = '/api/addArticle' method = 'post' >
            <p>time:<input type = "text" name = "time" size = "100"></input></p>
            <p>tag:<input type = "text" name = "tag" size = "100"></input></p>
            <p>title:<input type = "text" name = "title" size = "100"></input></p>
            <p>imgurl:<input type = "text" name = "imgurl" size = "100"></input></p>
            <p>desc:<textarea name = "desc" cols = "100" rows = "6"></textarea> </p>
            <p>detail:<textarea name = "detail" cols = "100" rows = "10"></textarea> </p>
            <p><input type = 'submit' value = '提交'></input></p>
          </form>


          <p>*******************************addDrawing*******************************</p>
          <form action = '/api/addDrawing' method = 'post' >
            <p>imgurl:<input type = "text" name = "imgurl" size = "100"></input></p>
            <p>title:<input type = "text" name = "title" size = "100"></input></p>
            <p>desc:<input type = "text" name = "desc" size = "100"></input></p>
            <p><input type = 'submit' value = '提交'></input></p>
          </form>

          <p>*******************************addAboutMe*******************************</p>
          <form action = '/api/addAboutMe' method = 'post' >
            <p>aboutMe:<textarea name = "aboutMe" cols = "100" rows = "10"></textarea> </p>
            <p><input type = 'submit' value = '提交'></input></p>
          </form>

        </AddItemsWrapper>
      </Fragment>
    )
  }

}

export default AddItem;