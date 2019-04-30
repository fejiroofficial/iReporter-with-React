import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Classes from './HeroBanner.css';
import Aux from '../../hoc/Aux';

const heroBanner = props => {
  const { isLoggedIn } = props;
  return (
    <Aux>
      <div className={Classes.HeroBanner}>
        <h1>Are you Ready To Fight Corruption?</h1>
        {
          isLoggedIn
            ?
            <Link to="/ireport">
              <button>Report case</button>
            </Link>
            : 
            <Link to="/signup">
              <button>Sign Up For Free</button>
            </Link>
        }
      </div>
      <h1 className={Classes.SmallScreenH1}>
        Are you Ready To Fight Corruption?
    </h1>
      <div className={Classes.SmallScreenHeaderBtnBox}>
        {
          isLoggedIn
            ?
            <Link to="/ireport">
              <button>Report case</button>
            </Link>
            :
            <Link to="/signup">
              <button>Sign Up For Free</button>
            </Link>
        }
      </div>
      <div className={Classes.Seperator} />
    </Aux>
  );
};


const mapStateToProps = state => (
  {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
);

export default connect(mapStateToProps, {})(heroBanner);
