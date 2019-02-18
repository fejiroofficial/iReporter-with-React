import React from 'react';
import Classes from './ToolBar.css';

const toolBar = (props) => (
  <div className={Classes.LargeScreenNav} id="large-screen">
    <div className={Classes.Seperator}></div>
    <a className="nav-link" href="./about_us.html">ABOUT US</a>
    <div className={Classes.Seperator}></div>
    <a className="nav-link" href="./redFlag.html">RED-FLAGS</a>
    <div className={Classes.Seperator}></div>
    <a className="nav-link" href="./interventions.html">INTERVENTIONS</a>
    <div className={Classes.Seperator}></div>
    <a className="nav-link" href="./report.html">IREPORT</a>
    <div className={Classes.Seperator}></div>
    <a className="nav-link" href="./learn_us.html">LEARN ABOUT CORRUPTION</a>
    <div className={Classes.Seperator}></div>
  </div>
);

export default toolBar;