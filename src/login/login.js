import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
  }
  componentWillMount() {
    document.title = "登录 | 陈鑫的个人博客"
  }
  render () {
    if (!this.props.login){
      return (
        <Fragment>
            <p>username: <input type = "text" name = "username" onChange = {this.usernameChange}></input></p>
            <p>password: <input type = "password" name = "password" onChange = {this.passwordChange}></input></p>
            <p><button onClick = {this.submit} >登录</button></p>
        </Fragment>
      )
    }else {
      return(
        < Redirect to='/work' />
      )
    }

  }
  usernameChange(e) {
    this.setState({
      username: e.target.value
    })
  }
  passwordChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  submit() {
    //注意这时候的content-type是application/json
    Axios.post('/api/login', {
      username: this.state.username,
      password: this.state.password
    }).then((res) => {
      if (res.data === "ok") {
        this.props.setLogin()
      }
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default Login;