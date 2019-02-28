import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutUsPage from './components/AboutUs/AboutUs';



class App extends Component {
  render() {
    return (
      <div>
        <Layout>
            <Route path="/about" exact component={AboutUsPage} />
            <Route path="/" exact component={HomePage} />
        </Layout>
      </div>
    );
  }
}

export default App;
