import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Scene, Router, Actions, Stack  } from 'react-native-router-flux';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

class LoginScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {
      response: ''
    };
    this.onPress = this.onPress.bind(this);
    this.onPressFacebook = this.onPressFacebook.bind(this);
  }

  async onPress(){
    try {
      const userInfo = await GoogleSignin.signIn();
      this.setState({ response: 'Name ' + userInfo.user.name + ' Email ' + userInfo.user.email });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
   /*this.store.dispatch({ type: 'NAME', data: 'Vic'});
    this.store.dispatch({ type: 'EMAIL', data: 'essenwanger@gmail.com'});
    Actions.main();*/
  } 

  onPressFacebook(){
    LoginManager.logInWithReadPermissions(['public_profile', 'email']).then(
      function(result) {
        if (result.isCancelled) {
          this.setState({response: 'Login was cancelled'});
        } else {
         AccessToken.getCurrentAccessToken().then(
            (data) => {
              const responseCallback = ((error, result) => {
                if (error) {
                  this.setState({response: 'Error data' + error});
                } else {
                  this.setState({response: 'Name ' + result.name + ' Email ' + result.email});
                }
              })
              const profileRequestParams = {
                fields: {
                  string: 'id, name, email, first_name, last_name, picture'
                }
              }
              const profileRequestConfig = {
                httpMethod: 'GET',
                version: 'v2.5',
                parameters: profileRequestParams,
                accessToken: data.accessToken.toString()
              }
              const profileRequest = new GraphRequest(
                '/me',
                profileRequestConfig,
                responseCallback,
              )
              new GraphRequestManager().addRequest(profileRequest).start();
            }
          )
        }
      }.bind(this),
      function(error) {
        this.setState({response: 'Login failed with error: ' + error});
      }.bind(this)
    );
  } 

  componentDidMount () {
    GoogleSignin.configure({
      webClientId: '773390855103-lcr75klbbacbsb1pbes3vhv75c6p5e0l.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
    firebase.messaging().requestPermission()
    .then(() => {
      // User has authorised  
    })
    .catch(error => {
      // User has rejected permissions  
    });
    firebase.messaging().getToken().then(fcmToken => {
      if (fcmToken) {
        console.info('Hola')
        console.info(fcmToken)
      } else {
      // user doesn't have a device token yet
      }
    });
  }

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Image source={require('./../assets/logo-plp.png')}/>
        </View>
        <View style={styles.body}>
          <TouchableOpacity onPress={this.onPressFacebook}>
            <View style={styles.buttonFacebook}>
              <Text style={styles.buttonTextFacebook}>Facebook Sign In</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress}>
            <View style={styles.buttonGoogle}>
              <Text style={styles.buttonTextGoogle}>Google Sign In</Text>
            </View>
          </TouchableOpacity>
          <Text>
          {this.state.response}
          </Text>
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