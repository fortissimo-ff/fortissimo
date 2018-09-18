import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class Chat extends React.Component {
  render() {
    return (
      <Text style={styles.chat}>
        Chat with us on messenger!
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  chat: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    verticalAlign: 'middle',
    top: '36%',
  },
});
