import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './themes/components';
import ecommerce from './themes/variables/ecommerce';
import LoginScene from './scenes/LoginScene'
import MainScene from './scenes/MainScene'
import AsyncStorageExample from './examples/AsyncStorageExample'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(ecommerce)}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginScene} hideNavBar/>
          <Scene key="main" component={MainScene}  hideNavBar/>
          <Scene key="viewexample" component={AsyncStorageExample} initial hideNavBar/>
        </Stack>
      </Router>
      </StyleProvider>
    );
  }
}
