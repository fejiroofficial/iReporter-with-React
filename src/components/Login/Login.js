import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { successToast, failureToast } from '../../actions/toast';
import { loginUser } from '../../actions/auth';
import { ToastContainer } from 'react-toastify';
import Spinner from '../spinner/Spinner';
import Classes from './Login.css';

const login = (props) => {

  const [userData, setUserData] = useState({
    email: null,
    password: null,
  });
  const [ loading, setLoading] = useState(false);

  const updateInput = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const completeLogin = () => {
    props.loginUser(userData).then(res => {
      const { errors } = res;
      if (errors) {
        setLoading(false);
        Object.values(errors).forEach( error => props.failureToast(error));
      }
      else if (res.success === 'false') {
        setLoading(false);
        props.failureToast(res.message);
      } 
      else {
        props.history.push('/');
      }
    });
  };

  const validateUserData = (event) => {
    event.preventDefault();
    setLoading(true);
    const fieldsArr = Object.entries(userData);
    const errors = [];
    fieldsArr.forEach(field => {
      if (!field[1]) {
        errors.push(`${field[0]} is required.`);
        props.failureToast(`${field[0]} is required.`);
      }
    });
    return errors.length < 1 ? completeLogin() : setLoading(false);
  };

  return (
    <div className={Classes.LoginBox}>
    <div className={Classes.SignInContent}>
      <div className={Classes.SignInHeader}>Log into iReporter</div>
      <form className={Classes.SignInForm}>
        <label for='Username'>Email/Username</label>
        <input type='text' name='email' className="input-field" id='log-email' placeholder="Enter Email" required onChange={(event) => updateInput(event)}></input>
        <input type='text' name='password' className="input-field" id='log-password' placeholder="Enter Password" required onChange={(event) => updateInput(event)}></input>
        <button 
        className={Classes.SignBtn}
        onClick={(event => validateUserData(event))}> 
        {loading ? <Spinner loading={loading} /> : 'Sign in'}</button>
      </form>

      <div className={Classes.SignNote}>
        <p>Do not have an account? Create an account
        <Link to='/signup'>here...</Link>
        </p>
      </div>
    </div>
  </div>
  );
};

export default connect(() => ({}), { successToast, failureToast, loginUser })(login);
