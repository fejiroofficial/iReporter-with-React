/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { successToast, failureToast } from '../../actions/toast';
import { signupUser } from '../../actions/auth';
import Classes from './Signup.css';
import { ToastContainer } from 'react-toastify';
import Spinner from '../spinner/Spinner';
// import 'react-toastify/dist/ReactToastify.css';

const signUp = (props) => {

  const [userData, setUserData] = useState({
    username: null,
    firstname: null,
    lastname: null,
    othernames: null,
    email: null,
    telephone: null,
    password: null,
  });
  const [loading, setLoading] = useState(false);

  const updateInput = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const completeSignup = () => {
    props.signupUser(userData).then(res => {
      const { errors } = res;
      if (errors) {
        setLoading(false);
        Object.values(errors).forEach(error => props.failureToast(error));
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
    return errors.length < 1 ? completeSignup() : setLoading(false);
  };

  return (
    <div className={Classes.SignupBox}>
      <div className={Classes.SignUpContent}>
        <ToastContainer autoClose={5000} />
        <div className={Classes.SignUpHeader}>Create an Account</div>
        <form className={Classes.SignUpForm}>
          <label for='Username'>Username</label>
          <input type='text' name='username' className="input-field" placeholder="Enter username" required onChange={(event) => updateInput(event)}></input>
          <label for='firstname'>First name</label>
          <input type='text' name='firstname' className="input-field" placeholder="Enter first name" required onChange={(event) => updateInput(event)}></input>
          <label for='lastname'>Last name</label>
          <input type='text' name='lastname' className="input-field" placeholder="Enter last name" required onChange={(event) => updateInput(event)}></input>
          <label for='othernames'>Other names</label>
          <input type='text' name='othernames' className="input-field" placeholder="Enter other names" required onChange={(event) => updateInput(event)}></input>
          <label for='email'>Email</label>
          <input type='text' name='email' className="input-field" placeholder="Enter email" required onChange={(event) => updateInput(event)}></input>
          <label for='telephone'>Telephone</label>
          <input type='text' name='telephone' className="input-field" placeholder="Enter telephone" required onChange={(event) => updateInput(event)}></input>
          <label for='Password'>Password</label>
          <input type='text' name='password' className="input-field" id='log-password' placeholder="Enter Password" required onChange={(event) => updateInput(event)}></input>
          <button
            className={Classes.SignBtn}
            onClick={(event) => validateUserData(event)}
            disabled={loading}
          >
            {loading ? <Spinner loading={loading} /> : 'Sign up'}
          </button>
        </form>
        <div className={Classes.SignNote}>
          <p>Do not have an account? Create an account
          <Link to='/login'>here...</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(() => ({}), { successToast, failureToast, signupUser })(signUp);
