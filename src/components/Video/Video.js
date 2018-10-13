import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native';
import { Dimensions } from 'react-native';

let width = Dimensions.get('window').width;

class Video extends Component {
  render() {
    return (
        <View style={styles.container}>
          <WebView
              source={{uri: 'https://www.youtube.com/embed/79XsGVCmNCo'}}
              style={styles.video}
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        width,
    }
});

export default Video;
