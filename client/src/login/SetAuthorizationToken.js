import Axios from 'axios';


//这个文件的作用是让axios请求的头部里带上token，全局的
const setAuthorizationToken = (token) => {
  if (token) {
    Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete Axios.defaults.headers.common['Authorization'];
  }
}

export default setAuthorizationToken;