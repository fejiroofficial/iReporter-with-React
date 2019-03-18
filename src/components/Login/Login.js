import { Link } from 'react-router-dom';
import React from 'react';
import Classes from './Login.css';

const login = () => (
  <div className={Classes.LoginBox}>
    <div className={Classes.SignInContent}>
      <div className={Classes.SignInHeader}>Log into iReporter</div>
      <form className={Classes.SignInForm}>
        <label for='Username'>Email/Username</label>
        <input type='text' className="input-field" id='log-email' placeholder="Enter Email" required></input>
        <label for='Password'>Password</label>
        <input type='text' className="input-field" id='log-password' placeholder="Enter Password" required></input>
        <button className={Classes.SignBtn} id="sign-btn">Sign in</button>
      </form>

      <div className={Classes.SignNote}>
        <p>Do not have an account? Create an account
        <Link to='/signup'>here...</Link>
        </p>
      </div>
    </div>
  </div>
);

export default login;
