import React from 'react';
import Classes from './SideDrawer.css';

const sideDrawer = (props) => (
  <div className={Classes.Overlay}>
    <button onClick={props.clicked} className={Classes.Closebtn}>&times;</button>
    <div className={Classes.OverlayContent}>
      <div className={Classes.Seperator}></div>
      <a href="./about.html">ABOUT US</a>
      <div className={Classes.Seperator}></div>
      <a href="./learn.html">LEARN ABOUT CORRUPTION</a>
      <div className={Classes.Seperator}></div>
      <a href="./login.html">LOGIN</a>
      <div className={Classes.Seperator}></div>
      <a href="./signup.html">SIGN UP</a>
      <div className={Classes.Seperator}></div>
    </div>
  </div>
)

export default sideDrawer;
