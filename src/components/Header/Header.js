import React from 'react';
import Classes from './Header.css';

const header = (props) => (
  <div className={Classes.NavBar}>
    <div className={Classes.MenuIcon}onclick="openNav()">
      <div className={Classes.MenuIconBar}></div>
      <div className={Classes.MenuIconBar}></div>
      <div className={Classes.MenuIconBar}></div>
    </div>
    <a className={Classes.Logo} href="./index.html">
      <div className={Classes.LogoBox}>iReporter</div>
    </a>

    <p>Already have an account?</p>
    <div className={Classes.LoginBtn} onclick="goLogin()">LOGIN</div>
  </div>
);

export default header;
