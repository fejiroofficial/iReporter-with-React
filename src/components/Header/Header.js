import React, { useState } from 'react';
import Classes from './Header.css'

const header = (props) => (
    <div className={Classes.NavBar}>
      <main>{props.children}</main>
      <a className={Classes.Logo} href="./index.html">
        <div className={Classes.LogoBox}>iReporter</div>
      </a>
      <p>Already have an account?</p>
      <div className={Classes.LoginBtn} onClick="goLogin()">LOGIN</div>
    </div>
  );

export default header;
