import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Linking} from 'react-native';
import SvgUri from 'react-native-svg-uri';
import Facebook_logo from "../../img/img-icon-Facebook.svg";
import Instagram_logo from "../../img/img-icon-Instagram.svg";
import Twitter_logo from "../../img/img-icon-Twitter.svg";

class ContactBody extends Component {
  render() {
    return (
        <View>
              <View>
                <Text style={styles.italicsTitle}>contact us</Text>
              </View>
              <View>
                <Text style={styles.chatHelp}>Chat with us on Messenger!</Text>
              </View>
              <View>
                <Text style={styles.chatHelp}>Take a minute to help.</Text>
              </View>
              <View style={styles.iconContainer}>
                    <SvgUri source={Facebook_logo} alt={"Facebook_logo"} style={styles.icons} onPress={() => Linking.openURL('https://www.facebook.com/breakfasy/')} />
                    <SvgUri source={Instagram_logo} alt={"Instagram_logo"} style={styles.icons} onPress={() => Linking.openURL('https://www.instagram.com/breakfasy_/')} />
                    <SvgUri source={Twitter_logo} alt={"Twitter_logo"} style={styles.icons} onPress={() => Linking.openURL('https://twitter.com/breakfasy_')} />
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

});


export default ContactUs;
