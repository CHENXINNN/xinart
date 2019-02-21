import styled from 'styled-components';

export const WorkWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 90px auto;
  
`
export const ArticleWrapper = styled.div`
  float: left;
  box-sizing: border-box;
  width: 800px;
  background: white;

`
export const Banner = styled.div`
  box-sizing: border-box;
  line-height: 50px;
  border-bottom: 1px solid rgb(217, 217, 217);
  border-left: 6px solid rgb(255, 0, 0);
  padding-left: 10px;
  font-size: 16px;
  font-weight: bold;
`

export const Article = styled.div`
  overflow: hidden;
  position: relative;
  margin: 15px 20px 15px 20px;
  border-bottom: 1px solid rgb(217, 217, 217);
  .tag {
    float: left;
    padding: 4px 8px 4px 2px;
    margin-right:10px;
    font-size: 13px;
    background: rgb(242, 242, 242);
    color: rgb(120, 120, 120);
  }
  img {
    float: right;
    width: 300px;
    height: 200px;
    margin: 0 0 15px 15px;
  }
  h3 {
    color: black;
    line-height: 25px;
    margin-bottom: 10px;
  }
  p {
    color: rgb(120, 120, 120);
    margin-bottom: 50px;
    font-size: 14px;
  }
  .timer {
    position: absolute;
    bottom: 15px;
    font-size:13px;
    color: rgb(120, 120, 120);
  }
  .icon-06 {
    padding-right: 4px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(120, 120, 120);
  }
  .delete {
    margin-left: 5px;
    cursor: pointer;
  }
`

export const Filter = styled.div`
  float: left;
  width: 150px;
  box-sizing: border-box;
  margin: 0 0 0 10px ;
  padding: 10px 0 0 10px;
  background: white;

  span {
    display: block;
    float: left;
    padding: 4px 8px 4px 2px;
    margin: 0 10px 10px 0;
    font-size: 13px;
    background: rgb(242, 242, 242);
    color: rgb(100, 100, 100);
    transition:background-color .2s ease-in;

  }
  span:hover {
    background: rgb(225, 225, 225);
    cursor:pointer
  }
  .active {
    background: rgb(210, 210, 210);
  }
`
