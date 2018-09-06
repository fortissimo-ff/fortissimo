import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class OpeningHeader extends React.Component {
  render() {
    return (
      <Text style={styles.header}>
        Change someone's life.{"\n"}
        <Text style={styles.boldText}>
          One breakfast at a time.
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  }
});
