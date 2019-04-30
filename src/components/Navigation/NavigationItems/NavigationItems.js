import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Classes from './NavigationItems.css';

const NavigationItems = props => {
  const { isLoggedIn } = props;
  return (
    <div id="myNav" className={Classes.LargeScreenNav}>
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
          : null
      }
    </div>
  );
};

const mapStateToProps = state => (
  {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
);

export default connect(mapStateToProps, {})(NavigationItems);

