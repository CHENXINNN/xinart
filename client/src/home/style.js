import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: white;
  .signature {
    position: absolute;
    bottom: 50px;
    right: 50px;
    width: 60px;
  }
`
export const HomeWrapper = styled.div`
  position: relative;
  width: 900px;
  height: 100%;
  margin: 0 auto;
  .img_avatar {
    width: 640px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -83.6%);
    z-index:1;
  }
  .leftEye {
    position: absolute;
    left: 34.5%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index:2;

  }
  .rightEye {
    position: absolute;
    left: 65.2%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index:2;

  }
  img {
    position: absolute;
    width: 120px;
    vertical-align: bottom;
    transition: all .1s ease-in;
  }
  .tag {
    position: absolute;
    padding: 10px 0;
    color: black;
    font-weight:bold;
    font-size: 18px;
  }
  .bowl1 { 
    top: 48.5%;
    left: 10%;
    transform: translate(-50%, 514%);
  }
  .food1 {
    /* top: "50%", transform: "translate(-50%, 509.75%)"} : {top: "49%", transform: "translate(-50%, 637.5%)"} */
    left: 10%;
    top: 49%;
    transform: translate(-50%, 637.5%)
  }
  .tag1 {
    Top: 49.5%;
    left: 10%;
    transform: translate(-50%, 431.53%);
  }
  .jingya1 {
    top: 51%;
    left: 10%;
    width: 180px;
    transform: translate(-50%, 394.17%);
    z-index:-1;
  }
  .bowl2 {
    top: 48.5%;
    left: 50%;
    transform: translate(-50%, 514%);
  }
  .food2 {
    left: 50%;
    top: 49%;
    transform: translate(-50%, 637.5%)
  }
  .tag2 {
    Top: 49.5%;
    left: 50%;
    transform: translate(-50%, 431.53%);
  }
  .jingya2 {
    top: 51%;
    left: 50%;
    width: 180px;
    transform: translate(-50%, 394.17%);
    z-index:-1;
  }
  .bowl3 {
    top: 48.5%;
    left: 90%;
    transform: translate(-50%, 514%);
  }
  .food3 {
    left: 90%;
    top: 49%;
    transform: translate(-50%, 637.5%)
  }
  .tag3 {
    Top: 49.5%;
    left: 90%;
    transform: translate(-50%, 431.53%);
  }
  .jingya3 {
    top: 51%;
    left: 90%;
    width: 180px;
    transform: translate(-50%, 394.17%);
    z-index:-1;
  }

`
