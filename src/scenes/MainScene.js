import React, {Component} from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';

class MainScene extends Component{
  
  constructor(props){
    super(props)
    this.state = {text: ''};
  }

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.header}>
          <Text style={{fontSize: 15, color: '#fff'}}>App E-commerce</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={{margin: 20, flexDirection: 'row', 
            borderWidth: 1, borderColor: '#333', borderRadius: 4}}>
              <View style={{flex: 3, padding: 10}}>
                <Text>Hola mundo sdkj hdsfhsdjkf kdshfk hdskf hdsjkfhkdshf kjdshkjf hdskfh dksh dksjhf kjdshf kdshkf dsjkfdsjkhfdks </Text>
              </View>
              <View style={{flex: 2, padding: 10, alignItems: 'center'}}>
                <Image style={{height: 80, width: 80}} source={require('./../assets/logo-plp.png')}/>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default MainScene

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flex: 1, 
    backgroundColor: '#333', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  body: {
    flex: 9, 
    backgroundColor: '#fff'
  }
});