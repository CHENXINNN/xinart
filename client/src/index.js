import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import setAuthorizationToken from './login/SetAuthorizationToken';

//为了能在刷新页面之后的axios请求的Header中仍然带上token，
//我们需要在入口文件出执行一次这个函数
//注意去token的方式：localStorage.jwtToken，曲其中jwtToken是Key值，可以在浏览器的application中查看
// setAuthorizationToken(localStorage.jwtToken);

ReactDOM.render(<App />, document.getElementById('root'));

