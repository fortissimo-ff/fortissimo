import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import Home from './src/components/Home/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Home />



          
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF7FF',
  },
});
