import React from 'react';
import { NavLink } from 'react-router-dom';
import Classes from './NavigationItems.css';

const NavigationItems = (props) => (
  <div id="myNav" className={Classes.LargeScreenNav}>
    <div className={Classes.Seperator}></div>
    <NavLink to="/about" >ABOUT US</NavLink>
    <div className={Classes.Seperator}></div>
    <NavLink to="/corruption" >LEARN ABOUT CORRUPTION</NavLink>
    <div className={Classes.Seperator}></div>
    <NavLink to="/ireport/red-flags">REDFLAGS</NavLink>
    <div className={Classes.Seperator}></div>
    <NavLink to="/ireport/interventions">INTERVENTIONS</NavLink>
    <div className={Classes.Seperator}></div>
    <NavLink to="/ireport" >IREPORT</NavLink>
    <div className={Classes.Seperator}></div>
  </div>
);

export default NavigationItems;
