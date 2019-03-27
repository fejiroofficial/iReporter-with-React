import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutUsPage from './components/AboutUs/AboutUs';
import CorruptEdu from './components/CorruptionEdu/CorruptionEdu';
import Records from './components/Records/Records';
import Login from './components/Login/Login';
import SignUp from './components/Signup/Signup';
import Report from './components/Report/Report';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/ireport" exact component={Report} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/interventions" exact component={Records} />
          <Route path="/redflags" exact component={Records} />
          <Route path="/corruption" exact component={CorruptEdu} />
          <Route path="/about" exact component={AboutUsPage} />
          <Route path="/" exact component={HomePage} />
        </Layout>
      </div>
    );
  }
}

export default App;
