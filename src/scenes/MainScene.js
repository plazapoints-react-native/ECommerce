import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Container, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,
Card, CardItem, Thumbnail, Fab } from 'native-base';
import { Actions } from 'react-native-router-flux';
import HeaderApp from './../components/HeaderApp'

class MainScene extends Component{
  
  constructor(props){
    super(props)
    this.state = {text: ''};
  }



  onPress(nombre){
    //Actions.pop();
    Alert.alert(nombre);
  } 

  onActualizar(){
    Actions.refresh({nombre: 'Juan'});
  } 

  render(){
    const uri = "https://facebook.github.io/react-native/docs/assets/favicon.png";
    return (
      <Container>
        <HeaderApp label={'Plaza Points'} onPress={this.onPress} />
        <Content>
          <Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card><Card>
            <CardItem button onPress={() =>{Alert.alert('Hola')}}>
              <Body>
                <Text>
                   Producto
                </Text>
              </Body>
              <Right>
                <Thumbnail source={{uri: uri}} />
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          position="bottomRight"
          >
          <Icon name="share" />
        </Fab>
      </Container>     
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