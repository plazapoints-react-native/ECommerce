import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './themes/components';
import ecommerce from './themes/variables/ecommerce';
import LoginScene from './scenes/LoginScene'
import MainScene from './scenes/MainScene'
import ViewExample from './examples/ViewExample'
import CameraScene from './scenes/CameraScene'
import MapsScene from './scenes/MapsScene'
import WebViewScene from './scenes/WebViewScene'
import AnimatedScene from './scenes/AnimatedScene'
import ProductoScene from './scenes/ProductoScene'
import crossroads from 'crossroads'
import firebase from 'react-native-firebase';
import ecommerceredux from './reducers';
import { createStore } from 'redux';

let store = createStore(ecommerceredux);

export default class App extends Component {

  handleOpenURL = (url) => {
    const scheme = 'https://www.google.com'
    if(url && url.includes(scheme)){
      let index = url.indexOf(scheme)
      let slice = url.slice(index+scheme.length+1)
      crossroads.resetState()
      console.info(slice)
      crossroads.parse(slice)
    }
  }

  componentDidMount(){
    firebase.links().getInitialLink().then(this.handleOpenURL)
    this.unsuscribe = firebase.links().onLink(this.handleOpenURL)
  }

  componentWillUnmount(){
    this.unsuscribe()
  }

  render() {
    return (
      <StyleProvider style={getTheme(ecommerce)}>
      <Router>
        <Stack key="root">
          <Scene key="login" component={(props)=><LoginScene {...props} store={store} />} hideNavBar initial/>
          <Scene key="main" component={(props)=><MainScene {...props} store={store} />} hideNavBar />
          <Scene key="producto" component={(props)=><ProductoScene {...props} store={store} />} hideNavBar />
          <Scene key="viewexample" component={(props)=><ViewExample {...props} store={store} />} hideNavBar />
          <Scene key="camera" component={(props)=><CameraScene {...props} store={store} />} hideNavBar />
          <Scene key="maps" component={(props)=><MapsScene {...props} store={store} />} hideNavBar />
          <Scene key="webview" component={(props)=><WebViewScene {...props} store={store} />} hideNavBar />
          <Scene key="animated" component={(props)=><AnimatedScene {...props} store={store} />} hideNavBar />
        </Stack>
      </Router>
      </StyleProvider>
    );
  }
}

crossroads.addRoute('main/{id}', id => Actions.reset('main', {id}))