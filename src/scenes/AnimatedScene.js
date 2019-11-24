import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';

class AnimatedScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {
      width: new Animated.Value(200),
      top: new Animated.Value(0)
    };
    this.onPress1 = this.onPress1.bind(this);
    this.onPress2 = this.onPress2.bind(this);
    this.onPress3 = this.onPress3.bind(this);
  }

  onPress1(){
    Animated.timing(this.state.width,{
      toValue: 300,
      duration: 1000
    }).start()
  }

  onPress2(){
    Animated.sequence([
      Animated.timing(this.state.width,{
        toValue: 100,
        duration: 1000
      }),
      Animated.timing(this.state.top,{
        toValue: 100,
        duration: 1000
      }),
    ]).start();
  }

  onPress3(){
    Animated.parallel([
      Animated.timing(this.state.width,{
        toValue: 350,
        duration: 1000
      }),
      Animated.timing(this.state.top,{
        toValue: 150,
        duration: 2000
      }),
    ]).start();
  }

  render(){
    return (
      <View style={styles.container} >
        <View style={styles.botones}>
          <TouchableOpacity onPress={this.onPress1}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Animacion 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress2}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Animacion 2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPress3}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Animacion 3</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.animacion}>
          
          <Animated.View 
          style={{backgroundColor: '#333' , 
          width: this.state.width, 
          height: 200, 
          top: this.state.top}}
          />

        </View>
      </View>
    )
  }
}

export default AnimatedScene

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
  botones: {
    flex: 1, 
    backgroundColor: '#fff',
    paddingTop: 80
  },
  animacion: {
    flex: 2, 
    backgroundColor: '#fff',
  },
  button: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#1DB954'
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    color: 'white'
  }
});