import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class NetworkingExample extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  componentDidMount(){
    fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          text: responseJson.title,
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Text style={{padding: 20, fontSize: 20}}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}