/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
import Header from '../Header/Header';
import Toolbar from '../ToolBar/ToolBar';
const layout = (props) => (
  <Aux>
    <Header/>
    <Toolbar/>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={Classes.Content}>
      {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;
