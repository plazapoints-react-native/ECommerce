import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
Card, CardItem, Thumbnail, Fab, Spinner, Form, Item, Input, Root, Toast } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp'
import CardProduct from './../components/CardProduct'
import firebase from 'react-native-firebase';

class ProductoScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {cantidad: '0'};
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    /*let token = this.store.getState().token;
    if(token !==null){
      let producto = { nombre: this.props.producto.nombre, cantidad: this.state.cantidad}
      firebase.database().ref('usuarios/'+token+'/productos/'+this.props.producto.key).update(producto);
      Actions.pop();
    }*/
    Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay', 
              duration: 3000,
              position: 'top'
            })
    Actions.pop()
  } 

  render(){
    return (
      <Container>
        <HeaderApp title={'Plaza Points'} pop />
        <Content padder>
          <Card>
            <CardItem header>
              <Text></Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  Descripcion: 
                </Text>
                <Text>
                  Precio: 
                </Text>
                <Text>
                  Stock: 
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Item>
                <Input placeholder="Cantidad" 
                onChangeText={(text) => this.setState({cantidad: text})}
                value={this.state.cantidad} keyboardType={'numeric'}/>
              </Item>
            </CardItem>
         </Card>
          <Button block onPress={this.onPress}>
            <Text>Agregar</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

export default ProductoScene