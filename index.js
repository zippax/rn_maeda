import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  I18nManager
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux'

I18nManager.forceRTL(true)

import Home from './components/Home'
import Menu from './components/Menu'
import Maps from './components/maps/Map'
import Topping from './components/addOn/Topping'


class Maeda extends Component{
  render() {
    return (
      <Router>
        <Scene key="root" duration={0}>
          <Scene key="home" component={Home} hideNavBar initial/>
          <Scene key="menu" component={Menu} hideNavBar />
          <Scene key="maps" component={Maps} hideNavBar />
          <Scene key="topping" component={Topping} hideNavBar />
        </Scene>
      </Router>

    );
  }
}


AppRegistry.registerComponent('maeda', () => Maeda);
