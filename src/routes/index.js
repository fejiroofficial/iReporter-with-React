import React from 'react';
import { connect } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom';
import RedflagRecords from '../components/Records/Records';
import InterventionRecords from '../components/Records/Interventions'
import Report from '../components/Report/Report';
import SpecificRecords from '../components/Records/SpecificRecord';
import Aux from '../hoc/Aux';

const ProtectedRoutes = props => {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return (<Redirect to="/login" />);
  }
  return (
    <Aux>
      <Switch>
        <Route path="/user/ireport" exact component={Report} />
        <Route path="/user/ireport/interventions" exact component={InterventionRecords} />
        <Route path="/user/ireport/red-flags" exact component={RedflagRecords} />
        <Route path="/user/ireport/:recordType/:id" exact component={SpecificRecords} />
      </Switch>
    </Aux>
  );
};

const mapStateToProps = state => (
  {
    isLoggedIn: state.authReducer.isLoggedIn,
  }
);

export default connect(mapStateToProps, {})(ProtectedRoutes);