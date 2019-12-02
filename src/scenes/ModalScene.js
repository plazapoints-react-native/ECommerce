import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';
import Loader from '../components/Loader';

class ModalScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {
      loading: false
    }
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    this.setState({
      loading: true
    });
    setTimeout(() => {
      this.setState({loading: false})
    }, 2000);
  } 

  componentDidMount () {
    
  }

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Image source={require('./../assets/logo-plp.png')}/>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.buttonGoogle}>
              <Text style={styles.buttonTextGoogle}>Modal</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={{color: '#fff', fontSize: 15 }}>@ecommerce</Text>
        </View>
        <Loader loading={this.state.loading} label={'Ingresando'}/>
      </View>
    )
  }
}

export default ModalScene

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