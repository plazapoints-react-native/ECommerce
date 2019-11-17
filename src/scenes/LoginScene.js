import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';

class LoginScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    this.store.dispatch({ type: 'NAME', data: 'Vic'});
    Actions.main();
  } 

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Image source={require('./../assets/logo-plp.png')}/>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.buttonFacebook}>
              <Text style={styles.buttonTextFacebook}>Facebook Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.buttonGoogle}>
              <Text style={styles.buttonTextGoogle}>Google Sign In</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#fff', fontSize: 15 }}>@ecommerce</Text>
        </View>
      </View>
    )
  }
}

export default LoginScene

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 4, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  body: {
    flex: 7, 
    backgroundColor: '#fff',
    paddingTop: 40
  },
  footer: {
    flex: 1, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  buttonGoogle: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: '#dd4b39'
  },
  buttonTextGoogle: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  },
  buttonFacebook: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 40,
    alignItems: 'center',
    backgroundColor: '#3b5998'
  },
  buttonTextFacebook: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});