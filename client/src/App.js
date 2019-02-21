import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { GlobalStyle } from './style';
import Home from './home/home';
import Work from './work/work';
import Music from './life/music/music';
import Gallery from './life/gallery/gallery';
import Diary from './life/diary/diary'
import AboutMe from './aboutMe/aboutMe';
import Detail from './work/detail/detail';
import AddItem from './addItem/addItem';
import Login from './login/login';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      login: false
    }
  }

  setLogin() {
    this.setState({
      login: true
    })
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle/>
        <BrowserRouter>
          <Fragment>
            <Route exact path = '/'  component = {Home} ></Route>
            <Route exact path = '/login' render = {(props) => <Login {...props} login = {this.state.login} setLogin = {() => this.setLogin()} /> } ></Route>
            <Route exact path = '/work'  render = {(props) => <Work {...props} login = {this.state.login} /> } ></Route>
            <Route exact path = '/work/detail/:id'  component = {Detail} ></Route>
            <Route exact path = '/life/music'  render = {(props) => <Music {...props} login = {this.state.login} /> } ></Route>
            <Route exact path = '/life/gallery'  render = {(props) => <Gallery {...props} login = {this.state.login} /> } ></Route>
            <Route exact path = '/life/diary'  render = {(props) => <Diary {...props} login = {this.state.login} /> } ></Route>
            <Route exact path = '/aboutMe'  render = {(props) => <AboutMe {...props} login = {this.state.login} /> } ></Route>
            <Route exact path = '/addItem'  component = {AddItem} ></Route>
          </Fragment>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App;
