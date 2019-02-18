/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Logo</div>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={Classes.Content}>
      {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;
