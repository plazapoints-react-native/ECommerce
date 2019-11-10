import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class TextExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'coral'}} />
        <View style={{flex: 1}} >
          <Text style={{padding: 20, fontSize: 20}}>
          Bienvenido a E-commerce
          </Text>
          <Text style={{padding: 20, fontSize: 40}}>
          Ingrese sus datos por favor
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
