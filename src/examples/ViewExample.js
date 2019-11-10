import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';

export default class ViewExample extends Component<Props> {
  render() {
    //https://facebook.github.io/react-native/docs/colors
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, flexDirection: 'row'}} >
          <View style={{flex: 1, backgroundColor: 'skyblue'}} />
          <View style={{flex: 1, backgroundColor: 'slategray'}} />
        </View>
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
