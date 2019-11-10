import React, {Component} from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class TextInputExample extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, justifyContent: 'space-around'}} >
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Ingreso algun Texto"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Ingreso algun Texto"
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        </View>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
