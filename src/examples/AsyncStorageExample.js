import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class AsyncStorageExample extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.accion = this.accion.bind(this);
    this.limpiar = this.limpiar.bind(this);
  }

  async componentDidMount(){
    let usuario = await AsyncStorage.getItem('usuario');
    this.setState({text: usuario});
  }

  accion(){
    AsyncStorage.setItem('usuario', 'Hola mundo');
  }

  limpiar(){
    AsyncStorage.clear();
  }

  render() {
    return (
      <View>
        <Text style={{padding: 20, fontSize: 20}}>
          {this.state.text}
        </Text>
        <Button
          title="Presionar"
          onPress={this.accion}
        />
        <Button
          title="Eliminar"
          onPress={this.limpiar}
        />
      </View>
    );
  }
}