import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// Components
import ContactBody from './ContactBody';

export default class Contact extends React.Component {
  render() {
    return (
        <ImageBackground source={require('../../img/img-bg-dark.jpg')} style={styles.imageBackground}>
          <ContactBody />




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
