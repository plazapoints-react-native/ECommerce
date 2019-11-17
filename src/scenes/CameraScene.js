import React, {Component} from 'react';
import { Alert } from 'react-native';
import { Container, Content, Text, Button, Thumbnail } from 'native-base';
import HeaderApp from './../components/HeaderApp';
import ImagePicker from 'react-native-image-picker';

class CameraScene extends Component{
  
  constructor(props){
    super(props)
    this.store = this.props.store;
    this.state = {avatarSource: null};
    this.onPress = this.onPress.bind(this);
  }

  onPress(){
    const options = {
      title: 'Seleccionar Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        this.setState({
          avatarSource: source,
        });
      }
    });
  }

  render(){
    return (
      <Container>
        <HeaderApp title={'E-Commerce'} cart />
        <Content>
          <Thumbnail large source={this.state.avatarSource} style={{alignSelf: 'center'}} />
          <Button block onPress={this.onPress}>
            <Text>Tomar Foto</Text>
          </Button>
        </Content>
      </Container>     
    )
  }
}

export default CameraScene