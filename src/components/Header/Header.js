import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Classes from './Header.css';


const header = (props) => (
  <div className={Classes.NavBar}>
    <main>{props.children}</main>
    <a className={Classes.Logo} href="./index.html">
      <div className={Classes.LogoBox}>iReporter</div>
    </a>
    <p>Already have an account?</p>
    <Link to="/login">
      <div className={Classes.LoginBtn}>LOGIN</div>
    </Link>
  </div>
);

export default header;
