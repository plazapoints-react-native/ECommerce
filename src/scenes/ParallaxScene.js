import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import firebase from 'react-native-firebase';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class ParallaxScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {
      response: ''
    };
  }

  componentDidMount () {
  }

  render(){
    return (
      <ParallaxScrollView
      backgroundColor="blue"
      contentBackgroundColor="pink"
      stickyHeaderHeight={ 100 }
      parallaxHeaderHeight={300}
      renderForeground={() => (
       <View style={{ height: 300, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('./../assets/logo-plp.png')}/>
        </View>
      )}>
      <View style={{ height: 500 }}>
        <Text>Scroll me</Text>
      </View>
    </ParallaxScrollView>
    )
  }
}

export default ParallaxScene