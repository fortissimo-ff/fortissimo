import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

class ContactBody extends Component {
  render() {
    return (
        <View style={styles.container}>
              <View>
                <Text style={styles.italicsTitle}>contact us</Text>
              </View>lu
              <View>lu
                <Text style={styles.chatHelp}>Chat with us on Messenger!</Text>
              </View>
              <View>
                <Text style={styles.chatHelp}>Take a minute to help.</Text>
              </View>
              <View style={styles.iconContainer}>
              </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  italicsTitle: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '200',
    fontStyle: 'italic'
  },
  chatHelp: {
      fontSize: 10,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold',
      textDecorationLine: 'underline'
  },
  icons: {
      width: 50,
      height: 50,

  },
  iconContainer: {
      flex: 1,
      flexDirection: "row"
  }
  container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: 'center'
  }

});


export default ContactUs;
