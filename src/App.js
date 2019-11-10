import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import LoginScene from './scenes/LoginScene'
import MainScene from './scenes/MainScene'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginScene} title="Login" initial hideNavBar/>
          <Scene key="main" component={MainScene} title="Register" hideNavBar/>
        </Stack>
      </Router>
    );
  }
}
