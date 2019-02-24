import React from 'react';
import Classes from './ToggleHandler.css';

const toggleMenu = (props) => (
      <div className={Classes.MenuIcon} onClick={props.clicked}>
        <div className={Classes.MenuIconBar} />
        <div className={Classes.MenuIconBar} />
        <div className={Classes.MenuIconBar} />
      </div>
  );

export default toggleMenu;
