import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Signup.css';


const signUp = () => (
  <div className={Classes.SignupBox}>
    <div className={Classes.SignUpContent}>
      <div className={Classes.SignUpHeader}>Create an Account</div>
      <form className={Classes.SignUpForm}>
        <label for='Username'>Username</label>
        <input type='text' className="input-field" placeholder="Enter username" required></input>
        <label for='firstname'>First name</label>
        <input type='text' className="input-field" placeholder="Enter first name" required></input>
        <label for='lastname'>Last name</label>
        <input type='text' className="input-field" placeholder="Enter last name" required></input>
        <label for='othernames'>Other names</label>
        <input type='text' className="input-field" placeholder="Enter other names" required></input>
        <label for='email'>Email</label>
        <input type='text' className="input-field" placeholder="Enter email" required></input>
        <label for='telephone'>Telephone</label>
        <input type='text' className="input-field" placeholder="Enter telephone" required></input>
        <label for='Password'>Password</label>
        <input type='text' className="input-field" id='log-password' placeholder="Enter Password" required></input>
        <button className={Classes.SignBtn} id="sign-btn">Sign up</button>
      </form>

      <div className={Classes.SignNote}>
        <p>Do not have an account? Create an account
        <Link to='/login'>here...</Link>
        </p>
      </div>
    </div>
  </div>
);

export default signUp;
