import React, {Component} from 'react';
import {StyleSheet, View, Text, Button, Alert} from 'react-native';

export default class ButtonExample extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1}} >
          <Button
            color="#f194ff"
            title="Presionar"
            onPress={() => Alert.alert('Hello World')}
          />
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
