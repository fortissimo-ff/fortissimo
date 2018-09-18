import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';


export default class Chat extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => Linking.openURL('https://m.me/breakfasy')}>
        <Text style={styles.chat}>
          Chat with us on messenger!
        </Text>
      </TouchableOpacity>
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
