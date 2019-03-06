import React, { useState } from 'react';
import Classes from './Header.css';
import { NavLink } from 'react-router-dom';

const header = (props) => (
  <div className={Classes.NavBar}>
    <main>{props.children}</main>
    <a className={Classes.Logo} href="./index.html">
      <div className={Classes.LogoBox}>iReporter</div>
    </a>
    <p>Already have an account?</p>
    <NavLink to="/login">
      <div className={Classes.LoginBtn}>LOGIN</div>
    </NavLink>
  </div>
);

export default header;
