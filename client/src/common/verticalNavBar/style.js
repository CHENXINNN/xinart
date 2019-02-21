import styled from 'styled-components';

export const NavWrapper = styled.div`
  overflow: auto;
  float: right;
  div{
    float:right;
    width: 100px;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
    line-height: 40px;
    border-top: 2px solid #f6f6f6;
    cursor: pointer;
    color: black;
    transition: .2s ease-in;

  }
  .active {
    background: white;
    border-top: 2px solid red;
  }
  .inactive:hover {
    background: rgb(225,225,225);
    border-top: 2px solid rgb(225, 225, 225);
  }
`
