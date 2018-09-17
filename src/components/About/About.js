import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class About extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>
          our story
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
