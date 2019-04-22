/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutUsPage from './components/AboutUs/AboutUs';
import CorruptEdu from './components/CorruptionEdu/CorruptionEdu';
import RedflagRecords from './components/Records/Records';
import InterventionRecords from './components/Records/Interventions'
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Report from './components/Report/Report';
import SpecificRecords from './components/Records/SpecificRecord';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/ireport" exact component={Report} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/ireport/interventions" exact component={InterventionRecords} />
          <Route path="/ireport/red-flags" exact component={RedflagRecords} />
          <Route path="/corruption" exact component={CorruptEdu} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route path="/ireport/:recordType/:id" exact component={SpecificRecords} />
          <Route path="/" exact component={HomePage} />
        </Layout>
      </div>
    );
  }
}

export default App;
