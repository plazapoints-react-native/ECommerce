import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

class HeaderApp extends Component{

  constructor(props){
    super(props)
    this.onBack = this.onBack.bind(this);
  }

  onBack(){
    this.props.onPress('Manuel');
  }

  render(){
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.onBack}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.label}</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name='cart' />
          </Button>
        </Right>
      </Header>
    )
  }
}

export default HeaderApp