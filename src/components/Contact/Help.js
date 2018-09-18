import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <Text style={styles.help}>
        Take a minute to help.
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  help: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
    verticalAlign: 'middle',
    top: '50%',
  }
});
