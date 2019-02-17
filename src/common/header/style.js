import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  background: white;
  border-bottom: 1px solid rgb(217,217,217); 
  /* box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1); */
  z-index: 99;
`
export const HeadContainer = styled.div`
  height: 60px;
  margin: 0 auto;
  width: 1100px;
  a {
    color: black;
    font-size: 15px;
  }
  img {
    padding-top: 10px;
    float: left;
    height: 50px;

  }
`

export const RightCube = styled.div`
  float: right;
  line-height: 59px;
  font-weight: bold;
  width: 100px;
  text-align: center;
  box-sizing: border-box;
  &.active {
    box-sizing: border-box;
    border-bottom: 1px solid black;
  }
`