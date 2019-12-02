import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import { Spinner, Text } from 'native-base'

const Loader = props => {
  const {
    loading, label
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => {console.log('close modal')}}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
            <Spinner/>
            <Text style={styles.text} >{label}</Text>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000080'
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    width: 300,
    flexDirection: 'row',
    paddingLeft:40,
    paddingRight: 40,
    justifyContent: 'center'
  },
  text: {
    marginTop: 25,
    marginBottom: 25,
    marginLeft: 10
  }
});

export default Loader;