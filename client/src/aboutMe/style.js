import styled from 'styled-components';

export const AboutMeWrapper = styled.div`


`

export const AboutMeHTML = styled.div`
  width: 1100px;
  overflow: hidden;
  margin: 90px auto 0 auto;
  padding: 20px 200px 50px 200px;
  box-sizing: border-box;
  h1 {
    margin-bottom: 50px;
  }
  p {
    margin-top: 3ex;
    margin-bottom: 3ex;
    line-height: 3.5ex;
  }
  img {
    display: block;
    width: 300px;
    margin: 3ex auto;
  }
  code {
    /* background: rgba(255,229,100,0.2); */
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