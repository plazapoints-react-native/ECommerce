import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
Card, CardItem, Thumbnail, Fab, Spinner } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp'
import CardProduct from './../components/CardProduct'
import firebase from 'react-native-firebase';

class MainScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {productos: null};
  }

  componentDidMount(){
    let email = this.store.getState().email;
    let token = this.store.getState().token;
    if(token !==null){
      firebase.database().ref('usuarios/'+token).update({token: token, email: email});
    }
    firebase.database().ref('productos/').once('value', (snapshot) => {
      let productos=[];
      snapshot.forEach(function(data) {
        let producto = data.val();
        producto.key = data.key;
        productos.push(producto);
      });
      this.setState({productos: productos});
    });
  }

  onPress(producto){
    Actions.producto({producto : producto});
  } 

  render(){
    let productos = this.state.productos===null ? <Spinner color={'#333'} /> : this.state.productos.map((producto, index)=>
      <CardProduct key={index} producto={producto} onPress={this.onPress}/>
    );
    return (
      <Container>
        <HeaderApp title={'Plaza Points'} cart />
        <Content>
          {productos}
        </Content>
      </Container>     
    )
  }
}

export default MainScene