import React, {Component} from 'react';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

class HeaderApp extends Component{

  constructor(props){
    super(props)
    this.onBack = this.onBack.bind(this);
  }

  onBack(){
    Actions.pop();
  }

  render(){
    return (
      <Header>
        <Left>
          {this.props.pop &&
            <Button transparent onPress={this.onBack}>
              <Icon name='arrow-back' />
            </Button>
          }
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right>
          {this.props.cart &&
            <Button transparent>
              <Icon name='cart' />
            </Button>
          }
        </Right>
      </Header>
    )
  }
}

export default HeaderApp