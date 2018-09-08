import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// Components
import Blurbs from './Blurbs';

export default class About extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Blurbs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  }
});
