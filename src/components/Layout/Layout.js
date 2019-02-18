/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
import Header from '../Header/Header';
const layout = (props) => (
  <Aux>
    <Header/>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={Classes.Content}>
      {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;
