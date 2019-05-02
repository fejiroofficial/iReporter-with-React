import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Classes from './SideDrawer.css';

const sideDrawer = (props) => {
  const { isLoggedIn } = props;
  return (
    <div className={Classes.Overlay}>
      <button onClick={props.clicked} className={Classes.Closebtn}>&times;</button>
      <div className={Classes.OverlayContent}>
        <div className={Classes.Seperator} />
        <NavLink to="/about" >ABOUT US</NavLink>
        <div className={Classes.Seperator} />
        <NavLink to="/corruption" >LEARN ABOUT CORRUPTION</NavLink>
        <div className={Classes.Seperator} />
        {
          isLoggedIn
            ?
            <>
              <NavLink to="/user/ireport/red-flags">REDFLAGS</NavLink>
              <div className={Classes.Seperator} />
              <NavLink to="/user/ireport/interventions">INTERVENTIONS</NavLink>
              <div className={Classes.Seperator} />
              <NavLink to="/user/ireport" >IREPORT</NavLink>
              <div className={Classes.Seperator} />
            </>
            :
            <>
              <NavLink to="/login" >LOGIN</NavLink>
              <div className={Classes.Seperator} />
              <NavLink to="/signup" >SIGN UP</NavLink>
              <div className={Classes.Seperator} />
            </>
        }
      </div >
    </div >
  );
};

const mapStateToProps = state => (
  {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
);

export default connect(mapStateToProps, {})(sideDrawer);