import React, {Component} from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

export default class ScrollViewExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 1
        </Text>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 2
        </Text>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 3
        </Text>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 4
        </Text>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 5
        </Text>
        <Text style={{padding: 20, fontSize: 50}}>
          Texto 6
        </Text>
      </ScrollView>
    );
  }
}