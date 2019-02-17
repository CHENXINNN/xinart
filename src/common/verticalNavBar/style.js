import styled from 'styled-components';

export const NavWrapper = styled.div`
  overflow: auto;
  float: left;
  width: 100px;
  height: 150px;
  div{
    padding-left: 15px;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
    border-left: 6px solid rgb(242, 242, 242);
    cursor: pointer;
    color: black;
    transition: .2s ease-in;

  }
  .active {
    background: white;
    border-left: 6px solid rgb(255, 0, 0);
  }
  .inactive:hover {
    background: rgb(225,225,225);
    border-left: 6px solid rgb(225, 225, 225);
  }
`
