import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.headerView}>
        <Text style={styles.header}>
          contact
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
    fontSize: 35,
    fontStyle: 'italic',
    textAlign: 'center',
    justifyContent: 'top',
    top: '10%',
  },
});
