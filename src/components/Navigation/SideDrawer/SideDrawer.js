import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './SideDrawer.css';

const sideDrawer = (props) => (
  <div className={Classes.Overlay}>
    <button onClick={props.clicked} className={Classes.Closebtn}>&times;</button>
    <div className={Classes.OverlayContent}>
      <div className={Classes.Seperator} />
      <NavLink to="/about" >ABOUT US</NavLink>
      <div className={Classes.Seperator} />
      <NavLink to="/corruption" >LEARN ABOUT CORRUPTION</NavLink>
      <div className={Classes.Seperator} />
      <NavLink to="/redflags" >REDFLAGS</NavLink>
      <div className={Classes.Seperator} />
      <NavLink to="/interventions" >INTERVENTIONS</NavLink>
      <div className={Classes.Seperator} />
      <NavLink to="/login" >LOGIN</NavLink>
      <div className={Classes.Seperator} />
      <NavLink to="/signup" >SIGN UP</NavLink>
      <div className={Classes.Seperator} />
    </div >
  </div >
);

export default sideDrawer;
