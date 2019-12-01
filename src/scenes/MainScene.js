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
    /*firebase.database().ref('productos/').once('value').then((snapshot) => {
      this.setState({productos: snapshot.val()});
    });*/
    firebase.database().ref('productos/').on('value', (snapshot) => {
      this.setState({productos: snapshot.val()});
    });
    //this.setState({productos: this.cards()});
  }

  onPress(){
    /*firebase.database().ref('productos/').set(
      [{
      nombre: 'Producto 1',
      descripcion: 'Descripcion 1',
      tipo: '1',
      stock: '10',
      precio: '10'
    },{
      nombre: 'Producto 2',
      descripcion: 'Descripcion 2',
      tipo: '1',
      stock: '20',
      precio: '15'
    },{
      nombre: 'Producto 3',
      descripcion: 'Descripcion 3',
      tipo: '2',
      stock: '30',
      precio: '10'
    },{
      nombre: 'Producto 4',
      descripcion: 'Descripcion 4',
      tipo: '2',
      stock: '20',
      precio: '30'
    },{
      nombre: 'Producto 5',
      descripcion: 'Descripcion 5',
      tipo: '2',
      stock: '10',
      precio: '40'
    }]
    );*/
    let key = firebase.database().ref().child('productos/').push().key;
    firebase.database().ref('productos/'+key).set({
      nombre: 'Producto 1',
      descripcion: 'Descripcion 1',
      tipo: '1',
      stock: '10',
      precio: '10'
    });
    key = firebase.database().ref().child('productos/').push().key;
    firebase.database().ref('productos/'+key).set({
      nombre: 'Producto 2',
      descripcion: 'Descripcion 2',
      tipo: '1',
      stock: '20',
      precio: '15'
    });
    key = firebase.database().ref().child('productos/').push().key;
    firebase.database().ref('productos/'+key).set({
      nombre: 'Producto 3',
      descripcion: 'Descripcion 3',
      tipo: '2',
      stock: '30',
      precio: '10'
    });
    key = firebase.database().ref().child('productos/').push().key;
    firebase.database().ref('productos/'+key).set({
      nombre: 'Producto 4',
      descripcion: 'Descripcion 4',
      tipo: '2',
      stock: '20',
      precio: '30'
    });
    key = firebase.database().ref().child('productos/').push().key;
    firebase.database().ref('productos/'+key).set({
      nombre: 'Producto 5',
      descripcion: 'Descripcion 5',
      tipo: '2',
      stock: '10',
      precio: '40'
    });
    //Actions.viewexample();
  } 

  onActualizar(){
    Actions.refresh({nombre: 'Juan'});
  } 

  render(){
    /*let productos = <Spinner />;
    if(this.state.productos!==null){
      productos = this.state.productos.map((producto, index)=>
        <CardProduct key={index} producto={producto}/>
      );
    }*/
    let productos = this.state.productos===null ? <Spinner color={'#333'} /> : Object.keys(this.state.productos).map((key, index)=>
      <CardProduct key={index} producto={this.state.productos[key]}/>
    );
    return (
      <Container>
        <HeaderApp title={'Plaza Points'} cart />
        <Content>
          <Text>{this.props.id}</Text>
          <Text>
          {this.store.getState().name}
          </Text>
          <Button onPress={this.onPress}>
            <Text>
              Ok
            </Text>
          </Button>
          {productos}
        </Content>
      </Container>     
    )
  }
}

export default MainScene