import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import Home from './src/components/Home/Home';
import About from './src/components/About/About';
import Video from './src/components/Video/Video';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Home />
          <About />

          <Video />
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
