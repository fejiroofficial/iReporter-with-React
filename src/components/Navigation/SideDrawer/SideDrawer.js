import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './SideDrawer.css';

const sideDrawer = (props) => (
  <div className={Classes.Overlay}>
    <button onClick={props.clicked} className={Classes.Closebtn}>&times;</button>
    <div className={Classes.OverlayContent}>
      <div className={Classes.Seperator}></div>
      <NavLink to="/about" >ABOUT US</NavLink>
      <div className={Classes.Seperator}></div>
      <NavLink to="/corruption" >LEARN ABOUT CORRUPTION</NavLink>
      <div className={Classes.Seperator}></div>
      <NavLink to="/redflags" >REDFLAGS</NavLink>
      <div className={Classes.Seperator}></div>
      <NavLink to="/interventions" >INTERVENTIONS</NavLink>
      <div className={Classes.Seperator}></div>
      <a href="./login.html">LOGIN</a>
      <div className={Classes.Seperator}></div>
      <a href="./signup.html">SIGN UP</a>
      <div className={Classes.Seperator}></div>
    </div >
  </div >
)

export default sideDrawer;
