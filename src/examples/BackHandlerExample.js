import React, {Component} from 'react';
import {StyleSheet, View, Text, BackHandler, Alert} from 'react-native';

export default class BackHandlerExample extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      Alert.alert('Hello World')
      return true;
    });
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  render() {
    return (
      <View>
        <Text style={{padding: 20, fontSize: 20}}>
          Prueba
        </Text>
      </View>
    );
  }
}