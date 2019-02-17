import styled from 'styled-components';

export const DiaryWrapper = styled.div`
  overflow: hidden;
  width: 1150px;
  height: 750px;
  margin: 90px auto;
  
`
export const PostWrapper = styled.div`
  float: left;
  overflow: auto;
  width: 1000px;
  height: 750px;
  background: white;
  padding: 20px 0;
  
`
export const Postbox = styled.div`
  margin: 0 80px;
  padding: 10px 0;
  border-bottom: 1px solid rgb(200,200,200);
  span{
    font-size: 12px;
  }
  &:first-child {
    border-top: 1px solid rgb(200,200,200);
  }
  &:last-child {
    margin-bottom: 40px;
  }
  .icon-06 {
    padding-left: 750px;
    padding-right: 4px;
    font-size: 16px;
    font-weight: bold;
    color: rgb(120, 120, 120);
  }
  .time {
    font-size: 13px;
    color: rgb(120, 120, 120);
  }
`

export const Post = styled.div`
  p {
    line-height: 3.5ex;
    margin-bottom: 5px;
  }
  img{
    margin: 10px auto;
    display: block;
    width: 300px;
  }
  code {
    background: #f6f6f6;
    font-size: 14px;
    margin: 0 2px;
    padding: 0 2px;
    border-radius: 2.5px;
    color: #c7254e;
  }
  a{
    color: black;
    text-decoration: underline;
  }
  pre {
    background-color: #3a3a3a;
    overflow: auto;
    border-radius: 5px;
    padding: 20px 0;
    margin-bottom: 5px;
  }
  pre code {
    color: white;
    background-color: #3a3a3a;
  }

  .hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: #abb2bf;
  background: #282c34;
}

.hljs-comment,
.hljs-quote {
  color: #5c6370;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #c678dd;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e06c75;
}

.hljs-literal {
  color: #56b6c2;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #98c379;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #e6c07b;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #d19a66;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #61aeee;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}

`