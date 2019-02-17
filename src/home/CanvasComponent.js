import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class CanvasComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      speed: 30,
      intotal: 0,
      mouseOver: false,
      mouseOver1: false,
      mouseOver2: false,
      mouseOver3: false
    }
    this.myRef_leftEye = React.createRef();
    this.myRef_rightEye = React.createRef();
    this.rotate = this.rotate.bind(this);
    this.handleMouseOver1 = this.handleMouseOver1.bind(this);
    this.handleMouseOver2 = this.handleMouseOver2.bind(this);
    this.handleMouseOver3 = this.handleMouseOver3.bind(this);
    this.handleMouseOut1 = this.handleMouseOut1.bind(this);
    this.handleMouseOut2 = this.handleMouseOut2.bind(this);
    this.handleMouseOut3 = this.handleMouseOut3.bind(this);
 
  }

  componentDidMount() {
    this.startRotate();
  }

  componentWillUnmount() {
    this.stopRotate();
  }

  startRotate() {
    if(!this._framId) {
      this._framId = window.requestAnimationFrame(this.rotate);
    }
  }

  rotate() {

    const {speed, intotal, mouseOver, mouseOver1, mouseOver2, mouseOver3 } = this.state;
    switch(true) {

      case mouseOver1 === true && speed === 15 && (intotal%360-290) >0 && (intotal%360-290) <20 :
      this.setState({
        speed: 0
      })
      break;

      case mouseOver2 === true && speed === 15 && (intotal%360-245) >0 && (intotal%360-245) <20 :
      this.setState({
        speed: 0
      })
      break;

      case mouseOver3 === true && speed === 15 && (intotal%360-200) >0 && (intotal%360-200) <20 :
      this.setState({
        speed: 0
      })
      break;

      case mouseOver === true && speed === 15:
      this.setState({
        speed
      })
      break;

      case mouseOver === true && speed === 0:
      this.setState({
        speed
      })
      break;

      case speed <= 2 && speed > 1:
        this.setState({
          speed: 2
        })
      break;
        
      case speed < 10:
        this.setState({
          speed: speed - 0.1
        })
      break;
      
      case speed < 20:
      this.setState({
        speed: speed - 0.5
      })
      break;

      default:
      this.setState({
        speed: speed - 1
      })
      break;
    }

    const cl = this.myRef_leftEye.current.getContext('2d');
    cl.fillStyle = "white";
    cl.clearRect(0,0,80,80)
    cl.translate(40,40)
    cl.rotate(speed*Math.PI/180)
    cl.translate(-40,-40)
    cl.beginPath()
    cl.arc(18, 40, 12, 0, 2 * Math.PI);
    cl.fill();

    const cr = this.myRef_rightEye.current.getContext('2d');
    cr.fillStyle = "white";
    cr.clearRect(0,0,80,80)
    cr.translate(40,40)
    cr.rotate(speed*Math.PI/180)
    cr.translate(-40,-40)
    cr.beginPath()
    cr.arc(18, 40, 12, 0, 2 * Math.PI);
    cr.fill();

    this.setState({
      intotal: intotal + speed
    })

    this._framId = window.requestAnimationFrame(this.rotate)
  }

  stopRotate() {
    window.cancelAnimationFrame(this._framId);
  }

  render() {
    return (
      <Fragment>
      <canvas  className = "leftEye"  ref={this.myRef_leftEye} width={80} height={80}/>
      <canvas  className = "rightEye"  ref={this.myRef_rightEye} width={80} height={80}/>
      
          <Link  
            onMouseOver = {this.handleMouseOver1} 
            onMouseOut = {this.handleMouseOut1}
            to = '/work'>
            <img className = 'bowl1' src = '/imgs/bowl.jpg' alt = ''/>
            <div className = "tag1" >技术博客</div>
          </Link>
          <img className = 'food1'  style = {this.state.mouseOver1 ? {top: "685px"} : {top: "715px"}} src = '/imgs/food.jpg' alt = ''/>
          <img className = 'jingya1'  style = {this.state.mouseOver1 ? {opacity: 1} : {opacity: 0}} src = '/imgs/jingya.jpg' alt = ''/>
          
          <Link 
            onMouseOver = {this.handleMouseOver2} 
            onMouseOut = {this.handleMouseOut2}            
            to = '/life/music'>
            <img className = 'bowl2' src = '/imgs/bowl.jpg' alt = ''/>
            <div className = "tag2" >生活记录</div>
          </Link>
          <img className = 'food2' style = {this.state.mouseOver2 ? {top: "685px"} : {top: "715px"}} src = '/imgs/food.jpg' alt = ''/>
          <img className = 'jingya2'  style = {this.state.mouseOver2 ? {opacity: 1} : {opacity: 0}} src = '/imgs/jingya.jpg' alt = ''/>
          
          <Link 
            onMouseOver = {this.handleMouseOver3} 
            onMouseOut = {this.handleMouseOut3}
            to = '/aboutMe'>
            <img className = 'bowl3' src = '/imgs/bowl.jpg' alt = ''/>
          <div className = "tag3" >关于我</div>
          </Link>
          <img className = 'food3'  style = {this.state.mouseOver3 ? {top: "685px"} : {top: "715px"}} src = '/imgs/food.jpg' alt = ''/>
          <img className = 'jingya3'  style = {this.state.mouseOver3 ? {opacity: 1} : {opacity: 0}} src = '/imgs/jingya.jpg' alt = ''/>
        
          <img className = 'signature'  src = '/imgs/signature.jpg' alt = ''/>
      </Fragment>
    );
  }
  handleMouseOver1() {
    this.setState({
      speed: 15,
      mouseOver: true,
      mouseOver1: true
    })
  }
  handleMouseOver2() {
    this.setState({
      speed: 15,
      mouseOver: true,
      mouseOver2: true
    })
  }
  handleMouseOver3() {
    this.setState({
      speed: 15,
      mouseOver: true,
      mouseOver3: true
    })
  }
  handleMouseOut1() {
    this.setState({
      speed: 2,
      mouseOver: false,
      mouseOver1: false
    })
  }
  handleMouseOut2() {
    this.setState({
      speed: 2,
      mouseOver: false,
      mouseOver2: false
    })
  }
  handleMouseOut3() {
    this.setState({
      speed: 2,
      mouseOver: false,
      mouseOver3: false
    })
  }

}



export default CanvasComponent;
