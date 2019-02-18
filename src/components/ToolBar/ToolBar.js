import React from 'react';
import Classes from './ToolBar.css';

const toolBar = (props) => (
  <div className={Classes.LargeScreenNav}>
    <div className={Classes.Seperator}></div>
    <a href="./about_us.html">ABOUT US</a>
    <div className={Classes.Seperator}></div>
    <a href="./redFlag.html">RED-FLAGS</a>
    <div className={Classes.Seperator}></div>
    <a href="./interventions.html">INTERVENTIONS</a>
    <div className={Classes.Seperator}></div>
    <a href="./report.html">IREPORT</a>
    <div className={Classes.Seperator}></div>
    <a href="./learn_us.html">LEARN ABOUT CORRUPTION</a>
    <div className={Classes.Seperator}></div>
  </div>
);

export default toolBar;