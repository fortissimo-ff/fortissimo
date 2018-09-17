import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// Components
import Header from './Header';

export default class Home extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../../img/img-bg-dark.jpg')} style={styles.imageBackground}>
          <Header />




        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    paddingTop: 100,
    paddingBottom: 100,
  },
});
