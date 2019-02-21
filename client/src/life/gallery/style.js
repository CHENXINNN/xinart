import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 90px auto 0 auto;
`
export const DrawingWrapper = styled.div`
  float: left;
  position: relative;
  width: 100%;
  height: 750px;
  background: white;
  .box_drawing {
    margin: 20px auto 0 auto;
    width: 800px;
    overflow: hidden;
  }
  ul {
    position: relative;
    height: 100%;
    /* transition: left .5s ease-out; */
  }
  li {
    float: left;
    height: 100%;
    list-style: none;
  } 
  img {
    width: 800px;
    height: 600px;
  }
  h3 {
    position: relative;
    margin-top: 10px;
    margin-bottom: 10px;
    left: -8px;
  }
  span {
    color: rgb(100,100,100)
    /* font-style: italic */
  }
  .counterBar {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%,-50%);
    background: white;
    padding: 0 5px;
    border-radius: 10px;
    opacity: 0.5;
    span{
      cursor: pointer;
      color: rgb(200,200,200);
    }
    .active {
      color: black;
    }
  }
  .arrow {
    position: absolute;
    top: 250px;
    width: 40px;
    height: 120px;
    line-height: 120px;
    text-align: center;
    font-size: 25px;
    background: rgb(242,242,242);
    color: rgb(100,100,100);
    transition: background-color .2s ease-in;
    cursor: pointer;
  }
  .arrow:hover {
    background: rgb(225,225,225);
  }
  .leftArrow{
    left: 20px;
  }
  .rightArrow{
    right: 20px;
  }

`