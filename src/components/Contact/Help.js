import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={() => Linking.openURL('https://www.surveymonkey.com/r/Y6JCLQG')}>
        <Text style={styles.help}>
          Take a minute to help.
        </Text>
      </TouchableOpacity>
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
