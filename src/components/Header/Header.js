import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './Header.css';
import parseJwt from '../../hoc/decodeToken';


const header = (props) => {
  let username;
  let profileImage;
  const token = localStorage.getItem('token');
  const jwtDecoded = parseJwt(token);
  if (jwtDecoded) {
     username = jwtDecoded.username;
     profileImage = jwtDecoded.profileImage;
  }

  const authBoxPhoto = {
    width: '40px',
    height: '40px',
    marginTop: '15px',
    marginLeft: '0px',
    borderRadius: '50%',
    backgroundImage: `url(${profileImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div className={Classes.NavBar}>
      <main>{props.children}</main>
      <a className={Classes.Logo} href="/">
        <div className={Classes.LogoBox}>iReporter</div>
      </a>
      {token ?
        <div className={Classes.AuthBox}>
          <div style={authBoxPhoto} />
          <div className={Classes.AuthBoxName}>{ username }</div>
        </div>:
        <div className={Classes.InitAuthBox}>
        <p>Already have an account?</p>
        <Link to="/login">
        <div className={Classes.LoginBtn}>LOGIN</div>
        </Link>
        </div>

      }
    </div>
  );
};

export default header;
