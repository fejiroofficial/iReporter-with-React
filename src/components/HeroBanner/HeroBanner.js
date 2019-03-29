import React from 'react';
import { Link } from 'react-router-dom';
import Classes from './HeroBanner.css';
import Aux from '../../hoc/Aux';

const heroBanner = props => (
  <Aux>
    <div className={Classes.HeroBanner}>
      <h1>Are you Ready To Fight Corruption?</h1>
      <Link to="/signup">
        <button>Sign Up For Free</button>
      </Link>
    </div>
    <h1 className={Classes.SmallScreenH1}>
      Are you Ready To Fight Corruption?
    </h1>
    <div className={Classes.SmallScreenHeaderBtnBox}>
      <Link to="/signup">
        <button>Sign Up For Free</button>
      </Link>
    </div>
    <div className={Classes.Seperator}></div>
  </Aux>
);

export default heroBanner;
