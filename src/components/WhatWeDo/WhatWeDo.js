import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Blurbs from './Blurbs';

export default class WhatWeDo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Blurbs />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});
