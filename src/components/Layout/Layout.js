/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Classes from './Layout.css';
import Header from '../Header/Header';
import Toolbar from '../ToolBar/ToolBar';
import Footer from '../Footer/Footer';
import ToggleMenu from '../ToggleHandler/ToggleHandler';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class layout extends Component {
  state = {
    showSideDrawer: false,
  }
  drawerHandler = () => this.setState({ showSideDrawer: !this.state.showSideDrawer })

  renderDrawer = () => {
    const { showSideDrawer } = this.state;
    return showSideDrawer ? <SideDrawer clicked={this.drawerHandler}  /> : null
  }
  render() {
    return (
      <Aux>
      <Header>
        <ToggleMenu clicked={this.drawerHandler} />
      </Header>
      <Toolbar />
      {this.renderDrawer()}
      <main className={Classes.Content}>
        {this.props.children}
      </main>
      <Footer />
    </Aux>
    )
  }
}

export default layout;
