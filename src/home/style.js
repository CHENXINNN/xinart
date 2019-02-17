import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
`


export const HomeWrapper = styled.div`
  position: relative;
  width: 1100px;
  margin: 0 auto;
  .img_avatar {
    float: left;
    width: 800px;
    position: absolute;
    left: 150px;
    top: 80px;
    z-index:1;
  }
  .leftEye {
    position: absolute;
    left: 332px;
    top: 465px;
    z-index:2;
  }
  .rightEye {
    position: absolute;
    left: 680px;
    top: 465px;
    z-index:2;
  }
  img {
    position: absolute;
    width: 120px;
    vertical-align: bottom;
    transition: all .1s ease-in;
  }
  div {
    position: absolute;
    padding: 10px 0;
    color: black;
    font-weight:bold;
    font-size: 18px;
  }
  .bowl1 { 
    Top: 750px;
    left: 160px;
  }
  .bowl2 {
    Top: 750px;
    left: 490px;
  }
  .bowl3 {
    Top: 750px;
    left: 820px;
  }
  .food1 {
    /* top以inlinestyle的形式控制 */
    /* Top: 715px; */
    left: 160px;
  }
  .food2 {
    /* Top: 715px; */
    left: 490px;
  }
  .food3 {
    /* Top: 715px; */
    left: 820px;
  }
  .tag1 {
    Top: 710px;
    left: 183px;
  }
  .tag2 {
    Top: 710px;
    left: 515px;
  }
  .tag3 {
    Top: 710px;
    left: 855px;
  }
  .jingya1 {
    top: 710px;
    left: 135px;
    width: 180px;
    z-index:-1;
  }
  .jingya2 {
    top: 710px;
    left: 465px;
    width: 180px;
    z-index:-1;
  }
  .jingya3 {
    top: 710px;
    left: 795px;
    width: 180px;
    z-index:-1;
  }
  .signature {
    top: 850px;
    right: 0px;
    width: 60px;
  }


`
