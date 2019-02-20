import React from 'react';
import Classes from './HeroBanner.css';
import Aux from '../../hoc/Aux';

const heroBanner = (props) => (
  <Aux>
    <div className={Classes.HeroBanner}>
      <h1>Are you Ready To Fight Corruption?</h1>
      <button>Sign Up For Free</button>
    </div>
    <h1 className={Classes.SmallScreenH1}>
      Are you Ready To Fight Corruption?
    </h1>
    <div className={Classes.SmallScreenHeaderBtnBox}>
      <button>Sign Up For Free</button>
    </div>
    <div className={Classes.Seperator}></div>
  </Aux>
);

export default heroBanner;
