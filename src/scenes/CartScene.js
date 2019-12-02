import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
Card, CardItem, Thumbnail, Fab, Spinner, Form, Item, Input, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp'
import CardProduct from './../components/CardProduct'
import firebase from 'react-native-firebase';

class CartScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {productos: null};
    this.onPress = this.onPress.bind(this);
  }

  componentDidMount(){
    //let token = 'djLsELGiiCg:APA91bHPTiKpiBXPW6M74yhhWGpPzqOH7jJ3l0ndkettPN95ASr4Xwn4nkPlVNkxTup44olsExuKatzhAUfTWoEmf16RPfjM0TdanfDtvRa-4XttDzyrVX_1Ci3dVbArjikQS6JbZNzc';
    let token = this.store.getState().token;
    firebase.database().ref('usuarios/'+token+'/productos/').once('value', (snapshot) => {
      let productos=[];
      snapshot.forEach(function(data) {
        let producto = data.val();
        producto.key = data.key;
        productos.push(producto);
      });
      this.setState({productos: productos});
    });
  }

  onPress(){
    let token = this.store.getState().token;
    let name = this.store.getState().name;
    if(token !==null){
      firebase.database().ref('pedidos/'+token).update({token: token, name: name});
      Actions.pop();
    }
  } 

  render(){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    let productos = this.state.productos===null ? <Spinner color={'#333'} /> : this.state.productos.map((producto, index)=>
      <ListItem key={index} avatar>
        <Left>
          <Thumbnail small source={{ uri: uri }} />
        </Left>
        <Body>
          <Text>{producto.nombre}</Text>
          <Text note>Cantidad {producto.cantidad}</Text>
        </Body>
      </ListItem>
    );
    return (
      <Container>
        <HeaderApp title={'Plaza Points'} pop />
        <Content padder>
          <List>
            {productos}
          </List>
          <Button block onPress={this.onPress}>
            <Text>Pedir Productos</Text>
          </Button>
        </Content>
      </Container>     
    )
  }
}

export default CartScene