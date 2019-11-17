import React, {Component} from 'react';
import { WebView } from 'react-native-webview';

class WebViewScene extends Component{

  render(){
    return (
      <WebView
        source={{ uri: 'https://infinite.red' }}
        style={{ marginTop: 20 }}
      />
    )
  }
}

export default WebViewScene