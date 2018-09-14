import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


export default class WhatWeDo extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>
          what we do
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: '#9739E8',
    fontSize: 35,
    fontStyle: 'italic',
    textAlign: 'center',
  },

});
