import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';



export default class About extends React.Component {
  render() {
    return (
      <View style={styles.background}>
        <Text style={styles.header}>
          our story
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
  },

  header: {
    color: '#9739E8',
    fontSize: 35,
    fontStyle: 'italic',
    fontWeight: '300',
    textAlign: 'center',
  },
});
