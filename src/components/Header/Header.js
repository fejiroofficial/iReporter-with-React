import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Classes from './Header.css';
import parseJwt from '../../hoc/decodeToken';
import { logOut } from '../../actions/auth';


const header = (props) => {
  const { isLoggedIn } = props;
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

  const handleLogOut = () => {
    props.logOut();
  };

  return (
    <div className={Classes.NavBar}>
      <main>{props.children}</main>
      <a className={Classes.Logo} href="/">
        <div className={Classes.LogoBox}>iReporter</div>
      </a>
      {
        isLoggedIn ?
          <div className={Classes.AuthBox}>
            <div style={authBoxPhoto} />
            <div className={Classes.AuthCircleName}>
              <div className={Classes.AuthBoxName}>{username}</div>
              <div className={Classes.DropdownContent}>
                <div className={Classes.DropItem}>Profile</div>
                <div className={Classes.DropItem} onClick={handleLogOut}>Sign out</div>
              </div>
            </div>
          </div> :
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

const mapStateToProps = state => (
  {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
);


export default connect(mapStateToProps, { logOut })(header);

