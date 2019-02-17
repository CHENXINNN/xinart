import styled from 'styled-components';

export const MusicWrapper = styled.div`
  overflow: hidden;
  width: 1150px;
  margin: 90px auto 0 auto;
`
export const AlbumWrapper = styled.div`
  float: left;
  overflow: auto;
  width: 1000px;
  height: 800px;
  background: white;
  .album {
    position: relative;
    float: left;
    margin: 40px 0 10px 78px;
    width: 150px;
    height: 180px;
  }
  img {
    display: block;
    width: 150px;
    height: 150px;
    border-radius: 5px;
  }
  p {
    margin-top: 5px;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: rgb(100,100,100)
  }
  .albumDetails {
    position: absolute;
    left: 0;
    top: 0;
    width:150px;
    height:150px;
    background: white;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease-in;
    /* 有专辑名时格式不一样 */
    .withAlbum {
      margin: 20px auto;
    }
    .withoutAlbum {
      margin: 30px auto;
    }
    p {
      width: 150px;
      font-size: 13px;
      font-weight: bold;
      color: black;
    }
  }
  .album:hover .albumDetails {
    opacity: 0.7;
    z-index: 2;
  }
`
