import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Components
import Home from './src/components/Home/Home';
import About from './src/components/About/About';
import Video from './src/components/Video/Video';
import WhatWeDo from './src/components/WhatWeDo/WhatWeDo';
import Contact from './src/components/Contact/Contact';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <Home />
          <About />

          <Video />
          <WhatWeDo />
          <Contact />
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
