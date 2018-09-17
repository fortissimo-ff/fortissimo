import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.header}>
          contact
        </Text>
        <Text style={styles.chat}>
          Chat with us on messenger!
        </Text>
        <Text style={styles.help}>
          Take a minute to help.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerView: {
    position: 'absolute',
    top: '10%',
    left: 0,
    right: 0,
    verticalAlign: 'middle',
  },

  header: {
    color: 'white',
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    justifyContent: 'top',
    top: '10%',
  },

  chat: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
    verticalAlign: 'middle',
    top: '36%',
  },

  help: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    textDecorationLine: 'underline',
    verticalAlign: 'middle',
    top: '50%',
  }
});
